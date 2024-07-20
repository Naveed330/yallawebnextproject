'use client'
import React, { useState, useEffect } from 'react'
import HomePageNav from './HomePageNav'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import machinelogo from './Assets/HomePageAssets/machinelogo.png'
import YallaMoreAbout from './YallaMoreAbout';
import YallaProduct from './YallaProduct';
import YallaGallery from './YallaGallery';
import YallaServices from './YallaServices';
import HomePageBlogs from './HomePageBlogs';
import YallaFooter from './YallaFooter';
import VendingMachineCarousal from './VendingMachineCarousal';
import './HomePage.css'
import HeroSectionCarousal from './HeroSectionSlider';
const page = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            {/* <HomePageNav /> */}
            <HeroSectionCarousal />
            <Container fluid className='HomePageConatiner' >
                <Row>
                    <YallaMoreAbout />

                    <YallaProduct />

                    <YallaGallery />

                    <YallaServices />

                    <HomePageBlogs />

                    <YallaFooter />
                </Row>
            </Container>
        </>
    )
}

export default page


