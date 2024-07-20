'use client';
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import imageone from './Assets/HomePageAssets/image1.png';
import imagetwo from './Assets/HomePageAssets/image2.png';
import imagethree from './Assets/HomePageAssets/image3.png';
import imagefour from './Assets/HomePageAssets/image4.png';
import imagefive from './Assets/HomePageAssets/image5.png';
import { Row, Col, Container } from 'react-bootstrap';
import './HomePage.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200, // Large tablets and small desktops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // Small tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [imageone, imagetwo, imagethree, imagefour, imagefive];

    return (
        <div className="carousalImage">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image} alt={`image ${index + 1}`} layout='responsive' className='dotImagecarousal' />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AutoPlay;
