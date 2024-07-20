'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function AdaptiveHeight() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container mb-5 mt-4">
            <Slider {...settings}>
                <div className="yallaLifeStylediv">
                    <h3 className="yallaCarousaltxt">Lifestyle is all encompassing. What we put in our bodies is extremely important, but Yalla also believes that life is just better when you have immediate access to small luxuries that make things more efficient, workable or simply just make you feel good.</h3>
                    <h3 className="yallaCarousaltxt">Whether you need high quality accessories, exciting gifts, new devices or the latest wearables – Yalla has you covered. </h3>
                </div>
                <div className="yallaLifeStylediv">
                    <h3 className="yallaCarousaltxt">Yalla distributes a number of food, drink and lifestyle brands in the region We seek to provide additional stocking options for the brands we carry and work with a range of retailers and outlets.</h3>
                    <h3 className="yallaCarousaltxt">For consumers, we want to provide the ultimate in convenience and work hard to get our exciting products in a wide range of locations.</h3>
                </div>
                <div className="yallaLifeStylediv">
                    <h3 className="yallaCarousaltxt">Yalla use vending machines as a way to enable easy access to healthy foods and high-quality lifestyle products, 24hrs a day. We do it differently. No more boring machines, no more low-tech solutions. Yalla offers bright, colourful, dynamic dispensers in accessible venues.</h3>
                    <h3 className="yallaCarousaltxt">The company ethos is one of making traditional vending obsolete and healthy choices easy for all. Yalla has machines across the UAE in convenient locations, with a specialised focus on sports, fitness and educational establishments.</h3>
                </div>
            </Slider>
        </div>
    );
}

export default AdaptiveHeight;
