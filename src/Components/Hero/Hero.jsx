import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='container-fluid hero'>
        <div className="container">
      <div className="row gap-5 align-items-center">
        <div className="col-md-7 hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="icon" className='img-fluid' />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn d-flex ">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" className='img-fluid' />
            </div>
        </div>
        <div className="col-md-5 hero-right">
            <img src={hero_img} alt="hero image" className='img-fluid' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
