'use client';

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import numbercount from './Assets/HomePageAssets/numbercount.png'
import headerImage from './Assets/HomePageAssets/headerImage.png'
import nestedone from './Assets/HomePageAssets/nestedone.png'
import nestedtwo from './Assets/HomePageAssets/nestedtwo.png'
import nestedthree from './Assets/HomePageAssets/nestedthree.png'
import nestedfour from './Assets/HomePageAssets/nestedfour.png'
import yallalogoabout from './Assets/HomePageAssets/yallalogoabout.png'
import './HomePage.css';

const YallaMoreAbout = () => {
    const [selectedImage, setSelectedImage] = useState(headerImage);
    const [content, setContent] = useState(
        <h1 className='yallaboutproduct'>
            Yalla Food and Drinks, backed by the Khalifa Fund, promotes healthier options in convenience foods. Since our inception, we've been committed to offering balanced choices. Our team is dedicated to improving public health in the UAE by addressing issues like obesity and diabetes. We strive to reshape perceptions of vending by making nutritious products and information more accessible.
        </h1>
    );
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleAboutClick = () => {
        setContent(
            <h1 className='yallaboutproduct'>
                Yalla About and Drinks, backed by the Khalifa Fund, promotes healthier options in convenience foods. Since our inception, we've been committed to offering balanced choices. Our team is dedicated to improving public health in the UAE by addressing issues like obesity and diabetes. We strive to reshape perceptions of vending by making nutritious products and information more accessible.
            </h1>
        );
    };

    const handleMissionClick = () => {
        setContent(
            <h1 className='yallaboutproduct'>
                Yalla Mission and Drinks, backed by the Khalifa Fund, promotes healthier options in convenience foods. Since our inception, we've been committed to offering balanced choices. Our team is dedicated to improving public health in the UAE by addressing issues like obesity and diabetes. We strive to reshape perceptions of vending by making nutritious products and information more accessible.
            </h1>
        );
    };

    const handleVisionClick = () => {
        setContent(
            <h1 className='yallaboutproduct'>
                Yalla Vision and Drinks, backed by the Khalifa Fund, promotes healthier options in convenience foods. Since our inception, we've been committed to offering balanced choices. Our team is dedicated to improving public health in the UAE by addressing issues like obesity and diabetes. We strive to reshape perceptions of vending by making nutritious products and information more accessible.
            </h1>
        );
    };
    return (
        <Row style={{ marginTop: '7%' }} >

            <div className='visionAboutimage' >
            <div>
            <div className="image-container">
                <Image src={selectedImage} alt='headerImage' className="img_fluid_heroscetion" />
            </div>
            <div className='nested_image_container'>
                <div className='imageOne_nested' onClick={() => handleImageClick(nestedone)}>
                    <Image src={nestedone} alt='nestedone' className='responsive_image' />
                </div>
                <div className='imageOne_nested' onClick={() => handleImageClick(nestedtwo)}>
                    <Image src={nestedtwo} alt='nestedtwo' className='responsive_image' />
                </div>
                <div className='imageOne_nested' onClick={() => handleImageClick(nestedthree)}>
                    <Image src={nestedthree} alt='nestedthree' className='responsive_image' />
                </div>
                <div className='imageOne_nested' onClick={() => handleImageClick(nestedfour)}>
                    <Image src={nestedfour} alt='nestedfour' className='responsive_image' />
                </div>
            </div>
        </div>

                <div>

                    <div className='yallalogocontainer' >
                        <Image src={yallalogoabout} alt='yallalogoabout' className='yallalogoabout' />
                    </div>
                    <h1 className='who_we_are'>who we are</h1>
                    <div className='btnContainerabout'>
                        <button href={''} onClick={handleAboutClick} className='aboutmissionvision'>About</button>
                        <button href={''} onClick={handleMissionClick} className='aboutmissionvision'>MISSION</button>
                        <button href={''} onClick={handleVisionClick} className='aboutmissionvision'>VISION</button>
                    </div>
                    <div className='yallaaboutconatiner'>
                        <h1 className='yallatextaboutmission' > {content}</h1>
                    </div>
                    <div>
                        <Link href={''} className='readMorebtn'>Read More</Link>
                    </div>
                </div>
            </div>


            <Row className='machineInstalledCount'>
                <Col xs={12} lg={6}>
                    <div className='numbrcountclass' >
                        <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                        <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                        <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                        <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                    </div>
                </Col>
                <Col xs={12} lg={6} className='machineInstalledCol' >
                    <div className='machineInstalledTxt' >
                        <p className='machineInsllated' style={{ fontWeight: '700' }} >Machines Installed</p>
                    </div>
                </Col>
            </Row>
        </Row>
    );
}

export default YallaMoreAbout;
