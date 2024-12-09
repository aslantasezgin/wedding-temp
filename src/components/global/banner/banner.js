import React from 'react'
import "./banner.css"

const Banner = ({title}) => {
  return (
    <div className='main-banner'>
     <img className='banner-img' src='https://lovelove-react.wpocean.com/static/media/page-title.64777976cd7c5176d6b3.jpg'></img>
     <h2>{title}</h2>
    </div>
  )
}

export default Banner
