"use client"
import { useRouter } from 'next/router';
import Banner from '@/components/global/banner/banner';
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";

import blogsData from "../blogs.json"

import "./page.css";

const BlogDetail = () => {
  const usedParams = useParams(); 
  const { id } = usedParams;

  console.log(id, blogsData)
  const blog = blogsData.find((s) => s.id === id);

  if (!blog) {
    return <div>Blog bulunamadı!</div>;
  }

  return (
    <div>
      <Banner title="BLOG DETAY" />
      <div className='mid-container'>
        <div className='about-content'>
          <div className='about-img'>
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className='about-text'>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
