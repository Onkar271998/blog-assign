import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'




function AllRoutes() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes