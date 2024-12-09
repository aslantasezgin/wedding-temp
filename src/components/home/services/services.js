import React from 'react'
import "./services.css"

const Services = () => {
  return (
<section className="services">
  <div className="services-header">
    <h3>Hizmetlerimiz</h3>
    <h2>Sizler İçin Neler Yapıyoruz</h2>
    <div className="underline"></div>
  </div>
  <div className="services-container">
    <div className="service-item">
      <img src="/soz-1.jpg" alt="Söz & Nişan" />
      <h4>Söz & Nişan</h4>
    </div>
    <div className="service-item">
    <img src="/nisan.jpg" alt="Nişan" />
    <h4>Nişan</h4>
    </div>
    <div className="service-item">
    <img src="/kina.jpg" alt="Kına Gecesi" />
    <h4>Kına Gecesi</h4>
    </div>
    <div className="service-item">
    <img src="/dugun.jpg" alt="Düğün" />
    <h4>Düğün</h4>
    </div>
  </div>
</section>

  )
}

export default Services
