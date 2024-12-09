"use client"
import Banner from '@/components/global/banner/banner';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "./page.css";
import blogsData from "./blogs.json"

const BlogList = () => {



  return (
    <div>
      <Banner title="BLOG" />
      <div className='container'>
        <div className='blog-container'>
          {blogsData.map((blog) => (
            <div className='blog-card' key={blog.id}>
              <div className='blog-img'>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className='blog-text'>
                <h2 className='blog-title'>{blog.title}</h2>
                <p className='blog-description'>{blog.description}</p>
                <Link href={`/blog/${blog.id}`}>Devamını Oku</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
