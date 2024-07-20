'use client'; // Ensure this is at the top

import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import cardblogimage from './Assets/HomePageAssets/cardblogimage.png';
import Image from 'next/image';
import Link from 'next/link';
import imagelogo from './Assets/HomePageAssets/imagelogo.png';
import partner1 from './Assets/HomePageAssets/partner1.png';
import partner2 from './Assets/HomePageAssets/partner2.png';
import partner3 from './Assets/HomePageAssets/partner3.png';
import partner4 from './Assets/HomePageAssets/partner4.png';
import partner5 from './Assets/HomePageAssets/partner5.png';
import hrtag from './Assets/HomePageAssets/hrtag.png';
import instaPhoto from './Assets/HomePageAssets/instaPhoto.png'
import './HomePage.css';

const CardData = [
    {
        imageUrl: cardblogimage,
        imagelogo: imagelogo,
        namePerson: 'By: Mason Eduard',
        Datetime: 'Jan 3, 2022 - ',
        view: '3344 views',
        title: 'Corporate Problem in Vending Business'
    },
    {
        imageUrl: cardblogimage,
        imagelogo: imagelogo,
        namePerson: 'By: Mason Eduard',
        Datetime: 'Jan 3, 2022 - ',
        view: '3344 views',
        title: 'Vending Solutions'
    },
    {
        imageUrl: cardblogimage,
        imagelogo: imagelogo,
        namePerson: 'By: Mason Eduard',
        Datetime: 'Jan 3, 2022 - ',
        view: '3344 views',
        title: 'Snack for Machines'
    },
];

const PartnerData = [
    {
        ImagePartnerOne: partner1
    },
    {
        ImagePartnerOne: partner2
    },
    {
        ImagePartnerOne: partner3
    },
    {
        ImagePartnerOne: partner4
    },
    {
        ImagePartnerOne: partner5
    },
];

const HomePageBlogs = () => {
    return (
        <Container fluid>
            <div className='cardPartnerContainer' style={{ marginTop: '7%' }}>
                <Row className="mt-5">
                    <h4 className='productTag mt-4' style={{ textAlign: 'center' }} >Blogs</h4>
                    <h4 className='blognews' >Blogs & News About <span className='vendertag' >Vending</span> Industry</h4>
                    {CardData.map((card, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className="mb-4 mt-4">
                            <Card style={{ border: 'none' }} className='cardBlog'>
                                <Image
                                    variant="top"
                                    src={card.imageUrl}
                                    alt="cardblogimage"
                                    style={{ width: '100%' }}
                                />
                                <Card.Body>
                                    <h5 className='blogtextCard'>{card.title}</h5>
                                    <div className="carddatecontainer-wrapper">
                                        <div className="carddatecontainer">
                                            <div style={{ display: 'flex', gap: '5px', alignItems: 'start' }}>
                                                <Image src={card.imagelogo} alt="imagelogo" />
                                                <p style={{ fontSize: '10px', fontWeight: '400' }}>
                                                    {card.namePerson}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '5px', alignItems: 'start' }}>
                                                <p style={{ fontSize: '10px', fontWeight: '400' }}>
                                                    {card.Datetime}
                                                </p>
                                                <p style={{ fontSize: '10px', fontWeight: '400' }}>
                                                    {card.view}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'end', flexDirection: 'column', alignItems: 'end', marginTop: '60px' }} >
                        <Image src={hrtag} alt='See Gallery' className='seeGalleryLine' />
                        <Link href={'/'} className='seeGallery' style={{ color: 'rgba(50, 50, 50, 0.43)', fontWeight: '700' }} >View More</Link>
                    </div>
                </Row>

                <Row style={{ marginTop: '7%' }}>
                    <h3 className='instaText'>PARTNERS</h3>
                    <h3 className='peopletrustUs'>People Who Trust Us</h3>
                    <div className='partnerContainer'>
                        {PartnerData.map((partner, index) => (
                            <Col key={index} xs={6} md={4} lg={2} className="mb-4 mt-4">
                                <Image
                                    src={partner.ImagePartnerOne}
                                    alt={`partner${index + 1}`}
                                    style={{ width: '100%', maxWidth: '150px' }}
                                />
                            </Col>
                        ))}
                    </div>
                </Row>
            </div>

            <div style={{ marginTop: '7%' }}>
                <h3 className='instaText'>INSTAGRAM</h3>
                <Link href={'/'} >
                    <Image src={instaPhoto} alt='Instagram Click Here...' className="img-fluid" />
                </Link>
            </div>
        </Container>
    );
};

export default HomePageBlogs;
