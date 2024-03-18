import React from 'react'
import './Contect.css'

function Contect() {

  return (
   <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Address: Teichstrasse 26, 56072 Koblenz, Germany</p>
        <p>Email: gopaniyash04@gmail.com</p>
        <p>Phone: +49 163 5140288</p>
      </div>
      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.494109570577!2d7.611174415738329!3d50.35156747946349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b938b1064648db%3A0xef4a1c2c91870e6a!2sTeichstra%C3%9Fe%2026%2C%2056072%20Koblenz%2C%20Germany!5e0!3m2!1sen!2sus!4v1646949030365!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contect