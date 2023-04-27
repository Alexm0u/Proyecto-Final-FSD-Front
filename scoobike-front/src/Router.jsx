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
        <Route path='/' element={<Login/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/' element={<Services/>} />
        <Route path='/' element={<About/>} />
    </Routes>
    </>
  )
}
