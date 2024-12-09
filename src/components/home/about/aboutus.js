import React from 'react'
import "./aboutus.css"
import Link from 'next/link'


const AboutUs = () => {
  return (
<section className="about-us">
  <div className="about-container">
    <div className="image-container">
      <img src="/about-us.jpg" alt="About Us Image" />
    </div>
    <div className="content-container">
      <h3>Salon Bağdat</h3>
      <h2>Yüzlerde Çift, Binlerce Anı!</h2>
      <p>
      "Salon Bağdat" ailesi olarak mutluluğunuzu paylaşmaya devam ediyoruz. Sizi de bu büyük ailenin bir parçası olmaya davet ediyoruz.
      </p>
      <Link href="tel:02164575525" className="appointment-button">İletişim</Link>
    </div>
  </div>
</section>

  )
}

export default AboutUs
