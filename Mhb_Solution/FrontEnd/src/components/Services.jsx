import React from 'react'
import './Services.css'
import Service1 from '../assets/images/service1.png'
import Service2 from '../assets/images/service2.png'
import Service3 from '../assets/images/service3.png'


export default function Services() {
  return (
    <>
<div className="services" id='services'>
  <div className='head-title'>
    <p className='titles'>Services</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="service">
          <img src={Service1} width={350} className='img-fluid' alt="" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="service">
          <img src={Service2} width={350} className='img-fluid' alt="" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="service">
          <img src={Service3} width={350} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
