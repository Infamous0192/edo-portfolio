import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Project from 'pages/Project'
import Photography from 'pages/Project/Photography'
import Videography from 'pages/Project/Videography'
import Infographic from 'pages/Project/Infograpic'
import Poster from 'pages/Project/Poster'

import 'swiper/css'

const App: React.FC = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/photography" element={<Photography />} />
        <Route path="/project/videography" element={<Videography />} />
        <Route path="/project/infographic" element={<Infographic />} />
        <Route path="/project/poster" element={<Poster />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
