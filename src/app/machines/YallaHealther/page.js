import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import YallaMachineNavbar from '../YallaMachineNavbar';
import './Yallahealther.css'
import backlogo from '../../Assets/MachinePageAssets/backlogo.png'
import vendehealthier from '../../Assets/MachinePageAssets/vendehealthier.png'
import uppermm from '../../Assets/MachinePageAssets/uppermm.png'
import lowermm from '../../Assets/MachinePageAssets/lowermm.png'
import arrowupper from '../../Assets/MachinePageAssets/arrowupper.png'
import arrowlowerside from '../../Assets/MachinePageAssets/arrowlowerside.png'
const page = () => {
  return (
    <>
      <YallaMachineNavbar />
      <Container fluid >
        <h1 className='productParameter' >PRODUCT PARAMETERS</h1>
        <p className='fuselarge mt-3' >Sophisticated fuselage, just cover an area of 1 m</p>

        <div className='Yallahealthercontainer' >
          <Link href={'/machines'} > <Image src={backlogo} alt='backlogo' /></Link>

          <div className='healthierClassContainer' >

            <div className='upperlowerdiv'>
              <div>
                <Image src={uppermm} alt='UpperMm' />
                <h2 className='mmtag' >190mm</h2>
              </div>
              <Image src={lowermm} alt='lowermm' />
            </div>

            <div>
              {/* <div className='uppersidearrowmain' >
                <Image src={arrowlowerside} alt='arrowlowerside' className='arrowlowersideuppw' />
                <h2 className='mmtag' >795mm</h2>
              </div> */}

              {/* <div className='uppersidearrowmainone' >
                <Image src={arrowlowerside} alt='arrowlowerside' className='arrowlowerside' />
                <h2 className='mmtagarrow' >1269mm</h2>
              </div> */}

              <Image src={vendehealthier} alt='vendehealthier' className='vendehealthier' />

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default page