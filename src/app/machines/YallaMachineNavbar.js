'use client';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../Assets/ContactPageAssets/Navlogo.png';
import './YallaMachinestyle.css'
const YallaMachineNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="navmachineClass">
                <Container fluid>
                    <Navbar.Brand href="/">
                    <Image src={logo} width={90} height={70} alt='Home Page Navbar Logo'  className='logoAnimated'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" className="LinkClass">Home</Link>
                            <Link href="/yallaLifestyle" className="LinkClass">Yalla Lifestyle</Link>
                            <Link href="/products" className="LinkClass">Products</Link>
                            <Link href="/shops" className="LinkClass">Shop</Link>
                            <Link href="/machines" className="LinkClass">Machines</Link>
                            <Link href="/contactUs" className="LinkClass">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default YallaMachineNavbar