const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { User } = require('../models/User');


const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email, 
      role: user.role 
    }, 
    process.env.JWT_SECRET, 
    { 
      expiresIn: '7d' 
    }
  );
};


const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    
    let existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists' 
      });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

 
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      authProviders: [{
        provider: 'local',
        providerId: email
      }]
    });

    await newUser.save();

 
    const token = generateToken(newUser);

    res.status(201).json({ 
      token, 
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid credentials' 
      });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        message: 'Invalid credentials' 
      });
    }

   
    const token = generateToken(user);

    res.json({ 
      token, 
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        message: 'No user found with that email' 
      });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpiry;

    await user.save();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset</p>
        <p>Click this link to reset your password:</p>
        <a href="${resetURL}">${resetURL}</a>
        <p>This link will expire in 1 hour.</p>
      `
    });

    res.json({ 
      message: 'Password reset link sent to email' 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid or expired reset token' 
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Clear reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ 
      message: 'Password reset successful' 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Refresh Token
const refreshToken = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(401).json({ 
        message: 'User not found' 
      });
    }

    // Generate new token
    const token = generateToken(user);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Middleware for JWT Authentication
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Middleware for Role-Based Access Control
const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};

// Google OAuth Controller (Placeholder - requires passport setup)
const googleOAuthController = {
  initiateGoogleAuth: (req, res) => {
    // This will be configured with passport
    res.status(501).json({ 
      message: 'Google OAuth not implemented' 

    });
  },

  handleGoogleCallback: (req, res) => {
    // This will be configured with passport
    res.status(501).json({ 
      message: 'Google OAuth callback not implemented' 
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  refreshToken,
  authenticateJWT,
  roleMiddleware,
  generateToken,
  googleOAuthController
};