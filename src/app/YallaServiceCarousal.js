import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import serviceone from './Assets/HomePageAssets/service1.png';
import servicetwo from './Assets/HomePageAssets/service2.png';
import servicethree from './Assets/HomePageAssets/service3.png';
import servicefour from './Assets/HomePageAssets/service4.png';
import servicefive from './Assets/HomePageAssets/service5.png';
import Image from "next/image";

function PauseOnHover() {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    });

    useEffect(() => {
        const updateSettings = () => {
            if (window.innerWidth <= 768) {
                setSettings({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                });
            } else {
                setSettings({
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                });
            }
        };

        // Initial call to set the settings based on the current window width
        updateSettings();

        // Add event listener to handle window resize
        window.addEventListener("resize", updateSettings);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateSettings);
        };
    }, []);

    return (
        <div className="carousalImage">
            <Slider {...settings}>
                <div className="slide">
                    <Image src={serviceone} alt="Service card" />
                </div>
                <div className="slide">
                    <Image src={servicetwo} alt="Service card" />
                </div>
                <div className="slide">
                    <Image src={servicethree} alt="Service card" />
                </div>
                <div className="slide">
                    <Image src={servicefour} alt="Service card" />
                </div>
                <div className="slide">
                    <Image src={servicefive} alt="Service card" />
                </div>
            </Slider>
        </div>
    );
}

export default PauseOnHover;
