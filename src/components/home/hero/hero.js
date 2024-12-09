"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";




const Hero = () => {

  const slides = [
    {
      id:0,
      url:"/wp-3.jpg",
      alt:"Maltepe Düğün Kına Nişan Söz Organizasyonu"
    },
    {
      id:1,
      url:"/wp-1.jpg",
      alt:"Maltepe Düğün Kına Nişan Söz Organizasyonu"
    },
    {
      id:2,
      url:"/wp-2.jpg",
      alt:"Maltepe Düğün Kına Nişan Söz Organizasyonu"
    },
    {
      id:3,
      url:"/wp-4.jpg",
      alt:"Maltepe Düğün Kına Nişan Söz Organizasyonu"
    },
  ]

  return (
    <div className="main-hero"> 
    <Swiper
      modules={[ Pagination]}
      navigation={false}
      pagination={{ clickable: true }}
      spaceBetween={30}
      autoplay={{delay:500}}
      slidesPerView={1}
      loop={true}
      effect="fade" // Geçiş efekti
      fadeEffect={{ crossFade: true }} // Yumuşak fade
      speed={1500} // Geçiş hızı (ms cinsinden)
    >


      {slides.map((item) => {
        return(
          <SwiperSlide>
          <img
            src={item.url}
            alt={item.alt}
            key={item.id}
          />
        </SwiperSlide>
        )
      })}

    </Swiper>
    </div>
  );
};

export default Hero;
