import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AutoBlog from './pages/AutoBlog'
import ExploreNetwork from './pages/ExploreNetwork'
import Filter from './pages/Filter'
import Landing from './pages/Landing'
import Library from './pages/Library'
import Login from './pages/Login'
import Subscription from './pages/Subscription'
import UserProfile from './pages/UserProfile'
import VideoPlayer from './pages/VideoPlayer'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/autoblog' element={<AutoBlog/>} />
      <Route path='/explore' element={<ExploreNetwork/>} />
      <Route path='/filter' element={<Filter/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/subscribe' element={<Subscription/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route path='/videoplayer' element={<VideoPlayer/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App