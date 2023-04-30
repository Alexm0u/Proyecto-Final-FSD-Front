import React from 'react'
import vidHero from '../../../img/vidHero.mp4'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video className='vidHero' style={{width: "40rem"}} src={vidHero} autoPlay loop muted />
        <h1>Una nueva forma de moverse</h1>
        <p>económica, sostenible y perfecta para la ciudad</p>




    </div>
  )
}

export default HeroSection