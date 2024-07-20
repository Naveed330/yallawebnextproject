'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import testmonial from './Assets/HomePageAssets/testmonial.png'
import testamonialline from './Assets/HomePageAssets/testamonialline.png'
import './HomePage.css'
const HomePageTestmonial = () => {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: current => setActiveSlide2(current)
    };
    return (
        <>
      
            <div className="slider-container" style={{ marginTop: '7%' }}>

                <Slider {...settings}>
                    <div>
                        <div className="TestamonialMianContainer mt-5">
                            <Image src={testmonial} alt="TestMonial_Image" />
                            <div>
                                <h3 style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '600' }} className="testmonialtext" >TESTAMONIALS</h3>
                                <h2 className="yallavenderingtext" >People Says About <span style={{ color: '#74CEDC' }} >YALLA</span> Vending</h2>

                                <p style={{ textAlign: 'justify' }} >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                </p>

                                <div className="VendingCorp" >
                                    <Image src={testamonialline} alt="Testmonial_Line" />

                                    <h3 className=" VendingCorptext" >Sam Peters- Vending Corp LLC.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="TestamonialMianContainer mt-5">
                            <Image src={testmonial} alt="TestMonial_Image" />
                            <div>
                                <h3 style={{ color: '#D9D9D9', fontWeight: '600' }} className="testmonialtext">TESTAMONIALS</h3>
                                <h2 className="yallavenderingtext" >People Says About <span style={{ color: '#74CEDC' }} >YALLA</span> Vending</h2>

                                <p style={{ textAlign: 'justify' }} >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                </p>

                                <div className="VendingCorp" >
                                    <Image src={testamonialline} alt="Testmonial_Line" />

                                    <h3 className=" VendingCorptext" >Sam Peters- Vending Corp LLC.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="TestamonialMianContainer mt-5">
                            <Image src={testmonial} alt="TestMonial_Image" />
                            <div>
                                <h3 style={{ color: '#D9D9D9', fontWeight: '600' }} className="testmonialtext">TESTAMONIALS</h3>
                                <h2 className="yallavenderingtext" >People Says About <span style={{ color: '#74CEDC' }} >YALLA</span> Vending</h2>

                                <p style={{ textAlign: 'justify' }} >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                </p>

                                <div className="VendingCorp" >
                                    <Image src={testamonialline} alt="Testmonial_Line" />

                                    <h3 className=" VendingCorptext" >Sam Peters- Vending Corp LLC.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default HomePageTestmonial