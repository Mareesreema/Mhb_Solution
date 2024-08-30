import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <> 
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="footer-heading">MediaHub Solutions.</h4>
              <p>Anogaa Ltd | 124 City Road, London, EC1V 2NX</p>
              <div className="social-icons">
                <a href="#"><i className="glyphicon glyphicon-user"></i></a>
                <a href="#"><i className="glyphicon glyphicon-camera"></i></a>
                <a href="#"><i className="glyphicon glyphicon-picture"></i></a>
                <a href="#"><i className="glyphicon glyphicon-play"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="footer-heading">Useful Links</h4>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="footer-heading">Subscription</h4>
              <p>Unlock premium content with subscription.</p>
              <form className="subscribe-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                 
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="copyright">Copyright © All rights reserved by MediaHub Solutions.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
