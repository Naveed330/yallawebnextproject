"use client"
import React, { useEffect, useRef } from 'react'
import YallaMachineNavbar from './YallaMachineNavbar'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './YallaMachinestyle.css'
import vendeone from '../Assets/MachinePageAssets/vende1.png'
import vendetwo from '../Assets/MachinePageAssets/vende2.png'
import YallaFooter from '../YallaFooter';
const page = () => {

    const ref = useRef(null);

    useEffect(() => {
        const { current } = ref;
        if (current) {
            current.classList.add('fade-in');
        }
        return () => {
            if (current) {
                current.classList.remove('fade-in');
            }
        };
    }, []);

    return (
        <>
            <YallaMachineNavbar />
            <Container fluid className='machineConatiner' >
                <h1 className='chooseMachine' >CHOOSE YOUR MACHINE</h1>

                <div className='retailmainContainer'>

                    <div className=''>
                        <Link href={'/machines/YallaHealther'} className='retail_div'>
                            <Image src={vendetwo} alt='Retail_Machine' />
                        </Link>
                        <h2 className='textretail mt-4' >GO HEALTHIER</h2>
                    </div>

                    <div className=''>
                        <Link href={'/machines/YallaRetailer'} className='retail_div'>
                            <Image src={vendeone} alt='Retail_Machine' />
                        </Link>
                        <h2 className='textretail mt-4' >RETAIL</h2>
                    </div>

                </div>
            </Container>
            <YallaFooter />
        </>
    )
}

export default page









