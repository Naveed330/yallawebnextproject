import React from 'react'
import HomePageNav from '../HomePageNav'
import { Container, Row, Col } from 'react-bootstrap';
import './shopStyle.css'
const page = () => {
    return (
        <div>
            <HomePageNav />
            <Container fluid className='shopContainer'>
                <h2 style={{ textAlign: 'center' }} >Shops Coming Soon...</h2>
            </Container>
        </div>
    )
}

export default page
