"use client";
import Banner from "@/components/global/banner/banner";
import Link from "next/link";
import React from "react";
import "./page.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Galeri = () => {
  const [index, setIndex] = React.useState(-1);
  const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

  const photos = [
    {
      src: "/photos/1.jpg",
      width: 700,
      height: 700,
    },
    {
      src: "/photos/2.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/3.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/4.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/5.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/6.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/7.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/8.jpg",
      width: 700,
      height: 700,
    },       {
      src: "/photos/10.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/11.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/12.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/13.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/14.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/15.jpeg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/16.jpeg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/17.jpeg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/18.jpeg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/19.jpg",
      width: 700,
      height: 700,
    },    {
      src: "/photos/20.jpg",
      width: 700,
      height: 700,
    },   
  ];
  return (
    <>
      <Banner title={"GALERİ"}></Banner>
      <div className="photo-gallery">
        <RowsPhotoAlbum
          photos={photos}
          onClick={({ index: current }) => setIndex(current)}
        />
        
        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};

export default Galeri;
