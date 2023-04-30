import React from 'react'
import  imgbck   from '../../../img/backgroundhome.jpg'
import './Home.css'
import HeroSection from '../../components/hero/HeroSection'




export const Home = () => {
  return (
    <>

      <img className='bck-img' src={imgbck} alt="imagen fondo"/>
      <hr/>
      <HeroSection/>
</>
  )
}
