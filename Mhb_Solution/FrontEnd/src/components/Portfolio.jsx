import React from 'react'
import './Portfolio.css'
import Slider from '../assets/images/Slider.png'

export default function Portfolio() {
  return (
    <>
    <div className="portfolio" id='gallery'>
        <div className="head-title">
            <p className="titles">Portfolio Gallery</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="portfolio-gallery">
                        <img src={Slider} width={500} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
