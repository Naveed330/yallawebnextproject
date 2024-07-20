import React from 'react'
import HomePageNav from '../HomePageNav'
import { Container, Form } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import './productStyle.css'
import YallaProducts from './YallaProducts';
import YallaFooter from '../YallaFooter';

const Page = () => {
    return (
        <div>
            <HomePageNav />
            <Container fluid className='productContainer'>
                <div className='topsearchBar'>
                    <div className='searchbar'>
                        <Form.Control type="text" placeholder="Search" className='searchInput' />
                        <CiSearch className='linkSearch' />
                    </div>
                    <div className='barRoute'>
                        <Link href={'/'} className='barTag'>BARS</Link>
                        <div className="hrtag"></div>
                        <Link href={'/'} className='barTag'>CRISPS</Link>
                        <div className="hrtag"></div>
                        <Link href={'/'} className='barTag'>NUTS</Link>
                        <div className="hrtag"></div>
                        <Link href={'/'} className='barTag'>DRINKS</Link>
                    </div>

                    <div className='ALLBTNforMobile'>
                        <Link href={'/'} className='mblebtnText' >TOSI ALMOND SUPER BITES</Link>
                        <Link href={'/'} className='mblebtnText' >TOSI ALMOND SUPER BITES</Link>
                        <Link href={'/'} className='mblebtnText' >TOSI ALMOND SUPER BITES</Link>
                        <Link href={'/'} className='mblebtnText'>TOSI ALMOND SUPER BITES</Link>
                        <Link href={'/'} className='mblebtnText'>TOSI ALMOND SUPER BITES</Link>
                        <Link href={'/'} className='mblebtnText'>TOSI ALMOND SUPER BITES</Link>
                    </div>
                </div>

                <YallaProducts />
            </Container>

        </div>
    )
}

export default Page
