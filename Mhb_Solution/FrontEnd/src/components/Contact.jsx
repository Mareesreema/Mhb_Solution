import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="head-title">
          <p className="titles">
            Contact Us
          </p>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form">
                  <form action="" method="post">
                    <input type="text" className='form-control contact-form-name' placeholder='Name'/>
                    <input type="text" className='form-control contact-form-email' placeholder='Phone'/>
                    <input type="text" className='form-control contact-form-phone' placeholder='Email'/>
                    <textarea name="" placeholder='Message' className='form-control contact-form-text' id=""></textarea>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5868385070564!2d144.95373531563943!3d-37.816218979751555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f35f8dfd%3A0x3b6a097ae8b5e33f!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1606374321373!5m2!1sen!2sau"
                    width="100%"
                    height="290"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
