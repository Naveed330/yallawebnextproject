'use client';

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import logo from './Assets/HomePageAssets/HomeNavlogo.png'
import './HomePage.css'
const HomePageNav = () => {
    return (
        <Navbar expand="lg" style={{backgroundColor:'transparent'}} >
            <Container >
                <Image src={logo} width={90} height={70} alt='Home Page Navbar Logo' className='logoAnimated' />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link href="/" className='LinkClass' style={{ fontWeight: '600' }} >Home</Link>
                        <Link href="/yallaLifestyle" className='LinkClass' style={{ fontWeight: '600' }} >Yalla Lifestyle</Link>
                        <Link href="/products" className='LinkClass' style={{ fontWeight: '600' }}>Products</Link>
                        <Link href="/shops" className='LinkClass' style={{ fontWeight: '600' }} >Shop</Link>
                        <Link href="/machines" className='LinkClass' style={{ fontWeight: '600' }} >Machines</Link>
                        <Link href="/contactUs" className='LinkClass' style={{ fontWeight: '600' }} >Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomePageNav;
