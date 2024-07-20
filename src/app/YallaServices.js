'use client'
import React from "react";
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './HomePage.css';
import serviceCards from './Assets/HomePageAssets/serviceCards.png';
import HomePageTestmonial from "./HomePageTestmonial";
import { useMediaQuery } from 'react-responsive';
import ServiceCarousal from "./YallaServiceCarousal";
import servicsone from './Assets/HomePageAssets/servicsone.png'
import servicestwo from './Assets/HomePageAssets/servicestwo.png'
import servicesfour from './Assets/HomePageAssets/servicesfour.png'
import servicesthree from './Assets/HomePageAssets/servicesthree.png'
import servicesfive from './Assets/HomePageAssets/servicesfive.png'
import adnoc from './Assets/HomePageAssets/adnoc.png'
import yasmarina from './Assets/HomePageAssets/yasmarina.png'
import AdnocYasCarousal from "./AdnocYasCarousal";


const YallaServices = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Row style={{ marginTop: '7%' }}>
            <Col>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h4 className='productTag'>SERVICES</h4>
                    <h2 className='yallaproduct'><span className='yallatag'>Yalla</span> SERVICES</h2>
                    <p style={{ fontWeight: '400' }} className='producttext'>
                        Services we provide you for the vision of a healthier UAE
                    </p>
                </div>

                {isMobile ? (
                    <ServiceCarousal />
                ) : (
                    <div className='mt-4 allservicecards'>
                        {/* <Link href={''} ><Image src={servicesfive} alt="servicesfive" className="service-image service-image-five" /></Link>
                        <Link href={''} > <Image src={servicesthree} alt="servicesthree" className="service-image service-image-three" /></Link>
                        <Link href={''} ><Image src={servicsone} alt="servicesone" className="service-image service-image-one" /></Link>
                        <Link href={''} > <Image src={servicestwo} alt="servicestwo" className="service-image service-image-two" /></Link>
                        <Link href={''} >   <Image src={servicesfour} alt="servicesfour" className="service-image service-image-four" /></Link> */}
                    </div>

                )}

                <div className='btnContainerprpduct'>
                    <Link href={'/machines'} className='moreservices'>More Services</Link>
                </div>
                
                <AdnocYasCarousal/>



                {/* <div className="adnoc_bg_image mt-5">
                    <Image src={adnoc} alt="adnoc" className="w-100 yasmarina_image" />
                </div>
                <div className="adnoccontainer">
                    <h1 className="adnoctxt">
                        Yalla remains committed to exploring growth opportunities. We distribute a number of food, drinks, and lifestyle brands in the region. We want to provide the ultimate in convenience and work hard to get our exciting products in all ADNOC Oasis, around 360 stations. We provide our services with healthy drinks and snacks, including five flavors of Vitamin Well such as Antioxidant, Hydrate, Reload, and Care. Driven by the passion and belief that customers seeking convenience food should have healthier and balanced choices, this has been our goal from inception. Our team members share the vision of a healthier UAE.
                    </h1>
                </div>


                <div className="adnoc_bg_image mt-5">
                    <Image src={yasmarina} alt="yasmarina" className="w-100  yasmarina_image " />
                </div>
                <div className="adnoccontainer">
                    <h1 className="adnoctxt">
                        Taking pole positions on the yas marina circuit, the 5-star abu Dhabi - yas island is a modern and sophisticated destination that offers an exhilarating island getaway. ignite your senses at the only hotel in the world located on the top of a formula 1 race track as you live it up and bask in the Arabian sun. get ready to rev up on or off track amidst the hotel’s cutting-edge interiors that depict a desert terrain and reveal the best of abu Dhabi's history, heritage and culture extend the fun and enjoy exclusive rates when you book one of our yas island multi-park experiences. get ready for some action-packed adventures at our record-breaking theme parks.
                    </h1>
                </div> */}



                {/* <Row style={{ marginTop: '4%' }}>
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <div className="adnoc_bg_image">
                            <Image src={adnoc} alt="adnoc" className="img-fluid img_fluid_adnoc" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="px-3">
                        <div className="adnoccontainer">
                            <h1 className="adnoctxt">
                                Yalla remains committed to exploring growth opportunities. We distribute a number of food, drinks, and lifestyle brands in the region. We want to provide the ultimate in convenience and work hard to get our exciting products in all ADNOC Oasis, around 360 stations. We provide our services with healthy drinks and snacks, including five flavors of Vitamin Well such as Antioxidant, Hydrate, Reload, and Care. Driven by the passion and belief that customers seeking convenience food should have healthier and balanced choices, this has been our goal from inception. Our team members share the vision of a healthier UAE.
                            </h1>
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: '7%' }}>
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <div className="adnoc_bg_image">
                            <Image src={yasmarina} alt="yasmarina" className="img-fluid img_fluid_adnoc" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="px-3">
                        <div className="adnoccontainer">
                            <h1 className="adnoctxt">
                                Taking pole positions on the yas marina circuit, the 5-star abu Dhabi - yas island is a modern and sophisticated destination that offers an exhilarating island getaway. ignite your senses at the only hotel in the world located on the top of a formula 1 race track as you live it up and bask in the Arabian sun. get ready to rev up on or off track amidst the hotel’s cutting-edge interiors that depict a desert terrain and reveal the best of abu Dhabi's history, heritage and culture extend the fun and enjoy exclusive rates when you book one of our yas island multi-park experiences. get ready for some action-packed adventures at our record-breaking theme parks.
                            </h1>
                        </div>
                    </Col>
                </Row> */}

                {/* Testimonials */}
                <HomePageTestmonial />
            </Col>
        </Row>
    );
};

export default YallaServices;




