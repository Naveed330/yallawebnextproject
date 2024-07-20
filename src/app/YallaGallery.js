'use client'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import HomePageCarousal from './HomePageCarousal';
import Image from 'next/image';
import hrtag from './Assets/HomePageAssets/hrtag.png'
const YallaGallery = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1700px', margin: '0 auto' }} >
            <Row style={{ marginTop: '7%' }} >
                <Col>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <h4 className='productTag' >GALLERY</h4>
                        <h2 className='yallaproduct'> <span className='yallatag' >Yalla</span>  GALLERY</h2>

                        <p style={{ fontWeight: '400' }} className='producttext'>
                            A wide gallery with variety of branded snack products that provide healthier alternatives to traditional snacks.
                        </p>
                    </div>


                    {/* <HomePageCarousal /> */}

                    <div style={{ display: 'flex', justifyContent: 'end', flexDirection: 'column', alignItems: 'end', marginTop: '60px' }} >
                        <Image src={hrtag} alt='See Gallery' className='seeGalleryLine' />
                        <Link href={'/'} className='seeGallery' style={{ color: 'rgba(50, 50, 50, 0.43)', fontWeight: '700' }} >SEE GALLERY</Link>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default YallaGallery