import React, { useEffect, useState } from "react";
import Colors from "../colors.js";
import { useSelector,useDispatch } from "react-redux";
import Theme from '../assets/theme.svg'
import { setTheme } from "../redux/Slices/ThemeSlice.js";
import { Link } from "react-router-dom";

const Login = () => {
  const theme = useSelector((state) => state.theme.theme);

const dispatch=useDispatch()
  const [currentState, setcurrentState] = useState("Login");
  const [isVisible, setisVisible] = useState(false);

  // Theme Change Effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--bg-color", "#1a1a1a"); // Dark Mode
      document.documentElement.style.setProperty("--text-color", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#ffffff"); // Light Mode
      document.documentElement.style.setProperty("--text-color", "#");
    }
  }, [theme]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
  };

  useEffect(() => {
    setisVisible(true);
  }, []);

  return (
    <div
      className="h-screen "
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
      
    >
      <div className="flex justify-between px-30 pt-3 ">
     <Link to='/'>
     <div className="text-2xl font-bold flex items-center gap-2">
          
          STREAMLAB
        </div></Link>
        <div className="w-8 h-8  flex justify-center items-center rounded-full cursor-pointer" style={{backgroundColor:Colors[theme].btnBg}} onClick={()=>dispatch(setTheme(theme === "light" ? "dark" : "light"))}>
          <img src={Theme} alt="" />
        </div>
      </div>
      <form
        onSubmit={onSubmitHandler}
        className={`flex flex-col items-center w-[90%] m-auto sm:max-w-96 pt-50 gap-4 transition-all duration-1000  ${
          isVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-50"
        }`}
      >
        <div className="inline-flex items-center gap-2 mb-2 scroll-mt-10">
        <div>
      <p className='prata-regular text-3xl'>{currentState === "Login" ? "Login" : "Sign Up"}</p>
      <hr className='border-none h-[2.5px] w-full mt-1 '
      style={{backgroundColor:Colors[theme].btnBg}} />
    </div>
        </div>
        {currentState === "Login" ? (
          " "
        ) : (
          <input
            required
            type="text"
            className={`w-full px-3 py-2 border
           rounded-lg ${theme === "dark" ? "border-white" : "border-gray-800"}`}
            placeholder="Name"
          />
        )}
        <input
          required
          type="email"
          className={`w-full px-3 py-2 border 
           rounded-lg ${theme === "dark" ? "border-white" : "border-gray-800"}`}
          placeholder="Email"
        />

        <input
          required
          type="password"
          className={`w-full px-3 py-2 border
           rounded-lg ${
             theme === "dark" ? "border-white" : "border-gray-800"
           }  `}
           
          placeholder="Password"
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p
            className={`cursor-pointer `}
            style={{ color: Colors[theme].text }}
            onMouseEnter={(e) =>
              (e.target.style.color = Colors[theme].btnBg)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = Colors[theme].text)
            }
          >
            Forgot your password?
          </p>
          {currentState === "Login" ? (
            <p
              className={`cursor-pointer `}
              style={{ color: Colors[theme].text }}
              onMouseEnter={(e) =>
                (e.target.style.color = Colors[theme].btnBg)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = Colors[theme].text)
              }
            
              onClick={() => setcurrentState("Sign UP")}
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setcurrentState("Login")}
              onMouseEnter={(e) =>
                (e.target.style.color = Colors[theme].btnBg)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = Colors[theme].text)
              }
            >
              Login here
            </p>
          )}
        </div>
        <button
          className="mt-5 bg-black text-white text-base px-8 py-2 cursor-pointer rounded-lg"
          style={{ backgroundColor: Colors[theme].btnBg }}
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
        
      </form>
    </div>
  );
};

export default Login;
