import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Footer } from '../../components/footer/Footer'
import  imgbck   from '../../../img/backgroundhome.jpg'
import './Home.css'
import { Container } from 'react-bootstrap'



export const Home = () => {
  return (
    <>
    <NavBar />
    
      
      <img className='bck-img' src={imgbck} alt="imagen fondo"/>
      
    
    <Footer/>
    </>
  )
}
