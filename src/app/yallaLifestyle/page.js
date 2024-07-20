"use client"
import React, { useState, useEffect } from 'react';
import HomePageNav from '../HomePageNav'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import yallalifestyleLogo from '../Assets/LifestyleAssets/bottle.png'
import yallaLofestylelogo from '../Assets/LifestyleAssets/yallalifestylelogo.png'
import inspiringwelbeing from '../Assets/LifestyleAssets/inspiringwelbeing.png'
import './yallaStyle.css'
import YallaLifeStyleCarousal from './YallaLifeStyleCarousal';
import YallaFooter from '../YallaFooter';
import brandone from '../Assets/LifestyleAssets/brandone.png'
import brandtwo from '../Assets/LifestyleAssets/brandtwo.png'
import brandthree from '../Assets/LifestyleAssets/brandthree.png'
import YallaBrandsCarousal from './YallaBrandsCarousal';
import eatfood from '../Assets/LifestyleAssets/eatfood.png'
const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const YallaLifeStyleData = [
        {
            id: 0,
            YallaText: 'DRINK GOOD FEEL',
            imageUrl: yallalifestyleLogo
        },
        {
            id: 1,
            YallaText: 'Eat well live well',
            imageUrl: eatfood
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % YallaLifeStyleData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [YallaLifeStyleData.length]);


    return (
        <div>
            <HomePageNav />
            <Container fluid className='yallaContainer'>
                <Row className='pt-5' >
                    <Col xs={12} md={6} className="animate-left">
                        <div className='yallatextDiv'>
                            <h1 className='yallatext'>{YallaLifeStyleData[currentIndex].YallaText}</h1>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="animate-right">
                        <div className='yallaImageContainer'>
                            <Image src={YallaLifeStyleData[currentIndex].imageUrl} alt='yallalifestyleLogo' className='logoImage' />
                        </div>
                    </Col>

                    <div className='yallaLifestyleContainer'>
                        <Image src={yallaLofestylelogo} alt='yallaLofestylelogo' />
                        <p className='yallalifestyletext' >Yalla Lifestyle is a brand that is focused on inspiring better lifestyle choices by connecting people to real food and exciting, original brands that improve their overall wellbeing and enjoyment.</p>
                    </div>

                    <div className='imageContainerView' >
                        <Image src={inspiringwelbeing} alt='inspiringwelbeing' className='inspiringImage' />
                    </div>

                    <div className='dotImageContaineryalla' >
                        <h1 className='accessproducts' >We look to create easy access to products that taste good, look good and make you feel good.</h1>

                        <h1 className='abtUsyalla' >ABOUT US</h1>

                        <h1 className='yallaLifeoperation' >At Yalla Lifestyle we have three main areas of operation</h1>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-5'>
                        <Image src={yallaLofestylelogo} alt='yallaLofestylelogo' />
                    </div>

                    {/* <YallaLifeStyleCarousal /> */}

                    <h1 className='brandsTag' >OUR BRANDS</h1>

                    <YallaBrandsCarousal />

                    <h1 className='brandsTag' >SOCIAL MEDIA</h1>
                    <h1 className='instalsocialLink'>Follow us on Instagram @yallalifestyle</h1>

                    <YallaFooter />
                </Row>
            </Container>
        </div>
    )
}

export default Page


