import React from 'react'
import './Home.css'
import OurServices from '../../components/ourServicesSection/OurServices'
import { Col, Container, Row } from 'react-bootstrap'
import Imgbck from '../../../img/bikeherosection.jpg'







export const Home = () => {
  return (
    <>
      <Container fluid>
        
        <Row className='Row-hero'>
        <h1 className='text-center'>
          Bienvenido a Scoobike
        </h1>
          <Col className='col-main' lg={12} xs={10}>
            <img className='bck-img-home' src={Imgbck}></img>



          </Col>
        </Row>
      </Container>
      <OurServices />
      

    </>
  )
}
