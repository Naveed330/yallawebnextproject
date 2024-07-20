import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './productStyle.css'
import productItems from '../Assets/ProductAssets/productItems.png'
import productarrow from '../Assets/ProductAssets/productarrow.png'
import YallaFooter from '../YallaFooter';
const YallaProducts = () => {
  return (
    <Row className='mt-3' >
      <Col xs={12} md={4}>
        <div className='YallahealthyBarcontainer'>
          <h1 className='healthybar'>
            <span style={{ color: '#4BC6DA' }}>YALLA</span> Healthy Bars
          </h1>

          <div>
            {/* <h1 className='aedvalue'>4,00 AED</h1> */}
            <h1 className='almondtext'>TOSI ALMOND SUPER BITES</h1>
          </div>

          <div style={{ width: '100%', maxWidth: '470px' }}>
            <p className='ptag mt-3'>
              That is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds
            </p>
            <ul className='ptag'>
              <li>Gluten free</li>
              <li>Organic</li>
              <li>Vegan</li>
            </ul>
          </div>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className='YallahealthyBarcontainer mb-3'>
          <Image src={productItems} alt='productItems' className='productImage' />
        </div>
      </Col>
      <Col xs={12} md={4} >
        <div className='YallahealthyBarcontainerLinks mt-3 mb-3'>
          <Link href={'/'} className='LinkClassproduct'>TOSI ALMOND SUPER BITES</Link>
          <Link href={'/'} className='LinkClassproduct'>TOSI CAPPUCCINO ALMOND</Link>
          <Link href={'/'} className='LinkClassproduct'>TOSI CASHEW SUPER BITES</Link>
          <Link href={'/'} className='LinkClassproduct'>BE-KIND DARK CHOCOLATE NUTS</Link>
          <Link href={'/'} className='LinkClassproduct'>BE-KIND NUT DELIGHT</Link>
          <Link href={'/'} className='LinkClassproduct'>BE-KIND ALMOND & COCONUT</Link>

          <div className='morebtncontainer' >
            <Link href={'/'} className='MoreClassbtn' >More
              <Image src={productarrow} alt='productarrow' style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </Col>

      <YallaFooter />
    </Row>
  )
}

export default YallaProducts


