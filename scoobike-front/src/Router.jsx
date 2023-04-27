import React from 'react'
import { Home } from './app/layouts/home/Home'
import { Login } from './app/layouts/login/Login'
import { Register } from './app/layouts/register/Register'
import { Services } from './app/layouts/services/Services'
import { About } from './app/layouts/About/about'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </>
  )
}
