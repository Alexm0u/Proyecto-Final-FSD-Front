import React from 'react'
import imgServ1 from '../../../img/ourserv1.jpeg'
import imgServ2 from '../../../img/ourserv2.jpeg'
import './ourServices.css'


const OurServices = () => {
  return (
    <div className="service-container">

    <h1>Nuestros Servicios:</h1>
    <img className='serv-img' src={imgServ1} alt="imagen serv 1"/>
    <img className='serv-img' src={imgServ2} alt="imagen serv 2"/>

    </div>
  )
}

export default OurServices