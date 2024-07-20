import React from "react";
import Slider from "react-slick";
import adnoc from './Assets/HomePageAssets/adnoc.png';
import yasmarina from './Assets/HomePageAssets/yasmarina.png';
import './HomePage.css';
import Image from 'next/image';

const AdnocYasCarousal = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="adnocyasContainer" style={{marginTop:'7%'}} >
            <Slider {...settings}>
                <div className="slide">
                    <div className="image-container">
                        <Image src={adnoc} alt="adnoc" className="w-100 yasmarina_image" />
                    </div>
                    <div className="text-container">
                        <h1 className="adnoctxt">
                            Yalla remains committed to exploring growth opportunities. We distribute a number of food, drinks, and lifestyle brands in the region. We want to provide the ultimate in convenience and work hard to get our exciting products in all ADNOC Oasis, around 360 stations. We provide our services with healthy drinks and snacks, including five flavors of Vitamin Well such as Antioxidant, Hydrate, Reload, and Care. Driven by the passion and belief that customers seeking convenience food should have healthier and balanced choices, this has been our goal from inception. Our team members share the vision of a healthier UAE.
                        </h1>
                    </div>
                </div>
                <div className="slide">
                    <div className="image-container">
                        <Image src={yasmarina} alt="yasmarina" className="w-100 yasmarina_image" />
                    </div>
                    <div className="text-container">
                        <h1 className="adnoctxt">
                            Taking pole positions on the yas marina circuit, the 5-star Abu Dhabi - Yas Island is a modern and sophisticated destination that offers an exhilarating island getaway. Ignite your senses at the only hotel in the world located on the top of a Formula 1 race track as you live it up and bask in the Arabian sun. Get ready to rev up on or off track amidst the hotel’s cutting-edge interiors that depict a desert terrain and reveal the best of Abu Dhabi's history, heritage, and culture. Extend the fun and enjoy exclusive rates when you book one of our Yas Island multi-park experiences. Get ready for some action-packed adventures at our record-breaking theme parks.
                        </h1>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default AdnocYasCarousal;
