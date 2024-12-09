import Banner from '@/components/global/banner/banner'
import Link from 'next/link'
import React from 'react'
import "./page.css"

const Page = () => {
  return (
    <div>
      <Banner title={"Hakkımızda"}></Banner>

      <div className='mid-container'>
      <div className='about-content'>
      <div className='about-img'><img src='/about-us.jpg'></img></div>
      <div className='about-text'>
       <h4>Salon Bağdat | Hakkımızda</h4>
        <p>İstanbul Maltepe'nin kalbinde, unutulmaz anılara ev sahipliği yapıyoruz! Yılların verdiği tecrübe ve organizasyon tutkumuzla, hayallerinizi gerçeğe dönüştürmek için buradayız. Düğün, nişan, kına ve söz organizasyonlarında misafirlerimize sadece bir etkinlik değil, hayat boyu unutulmayacak özel anlar sunuyoruz.</p>
        <p>Modern tasarımıyla göz kamaştıran salonumuz, hem şıklığıyla hem de ferah atmosferiyle her detayın mükemmel olmasını sağlar. Sadece bir mekan değil, aynı zamanda her aşaması özenle planlanmış, size özel bir deneyim sunuyoruz.</p>
      <p>Sizin ve sevdiklerinizin mutluluğu, bizim en büyük önceliğimiz! "Anılar, hayatı güzelleştirir" mottosuyla çıktığımız bu yolda, size en değerli anlarınızı unutulmaz kılmayı vaat ediyoruz.</p>
       <Link href={"#"}>İLETİŞİM</Link>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Page
