import React from 'react';
import './Navbar.css';
import logo from '../assets/images/Logo(2).png';
import phone from '../assets/images/Phone_icon.png';
import whatsapp from '../assets/images/WhatsApp_icon.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-default nav-mains" style={{ backgroundColor: '#FFA500' }}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MTS Logo" width="50" height="50" style={{ backgroundColor: 'white', padding: '5px' }} />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
            <li className='btn-right-icon'>
              <a href="#" className="">
                <img src={phone} alt="Phone" width="20" height="20" />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <img src={whatsapp} alt="WhatsApp" width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}