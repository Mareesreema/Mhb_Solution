import React from 'react'
import './Banner.css'
import heroslider from '../assets/images/hero_slider.png'
export default function Banner() {
  return (
    <>
    <div className='banner'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-6'>
    <p className='heading'>MediaHub Solutions</p>
    <p className='paragraph'>We are a leading company specializing in content creation, video production, and multimedia storytelling. Our innovative media solutions ensure enhanced brand visibility and engagement. Elevate your online presence with us! </p>
    <button className='btn' type='button'>Get Started</button>
    </div>
    <div className='col-md-6'>
    <div className='hero-slider'>
    <img src={heroslider} />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
