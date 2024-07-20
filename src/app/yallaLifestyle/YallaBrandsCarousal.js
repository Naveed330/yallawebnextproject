"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import brandone from '../Assets/LifestyleAssets/brandone.png'
import brandtwo from '../Assets/LifestyleAssets/brandtwo.png'
import brandthree from '../Assets/LifestyleAssets/brandthree.png'
function SwipeToSlide() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
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
    return (
        <div className="carousalImage mt-5">
            <Slider {...settings}>
                <div>
                    <Image src={brandone} alt="brandone" className="yallaCarousalImage" />
                </div>
                <div>
                    <Image src={brandtwo} alt="brandone" className="yallaCarousalImage"/>
                </div>
                <div>
                    <Image src={brandthree} alt="brandone" className="yallaCarousalImage"/>
                </div>
                <div>
                    <Image src={brandone} alt="brandone" className="yallaCarousalImage"/>
                </div>
                <div>
                    <Image src={brandone} alt="brandone" className="yallaCarousalImage"/>
                </div>
                <div>
                    <Image src={brandtwo} alt="brandone" className="yallaCarousalImage"/>
                </div>
                <div>
                    <Image src={brandthree} alt="brandone" className="yallaCarousalImage"/>
                </div>
            </Slider>
        </div>
    );
}

export default SwipeToSlide;
