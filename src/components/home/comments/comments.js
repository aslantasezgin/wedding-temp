"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./comments.css";
import { ChatHeart, ChatSquare, ChatSquareQuote, Quote } from "react-bootstrap-icons";


const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero ac felis volutpat sodales.",
    author: "Jane & Doe",
    image:
    "https://lovelove-react.wpocean.com/static/media/img-2.e83bd360ab7b8e445eb6.jpg",
  },
  {
    id: 2,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue.",
    author: "John & Smith",
    image:
      "https://lovelove-react.wpocean.com/static/media/img-2.e83bd360ab7b8e445eb6.jpg",
  },
  {
    id: 3,
    text: "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    author: "Emily & Davis",
    image:
    "https://lovelove-react.wpocean.com/static/media/img-2.e83bd360ab7b8e445eb6.jpg",
  },
];

const Comments = () => {
  return (
    <section className="testimonial-section">
      <div className="container">


        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="swiper-wrapper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-item">
                {/* Yorum Alanı */}
                <div className="testimonial-text-container">
                <div className="testimonial-text-content">
                
                <span className="testimonial-icon">
                    <ChatSquareQuote />{" "}
                  </span>
                  <p>"{testimonial.text}"</p>
                  <h4> {testimonial.author}</h4>
                </div>
                </div>
                {/* Görsel Alanı */}
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;
