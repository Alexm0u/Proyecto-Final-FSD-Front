import React from 'react'
import './Home.css'
import OurServices from '../../components/ourServicesSection/OurServices'
import { Col, Container, Row } from 'react-bootstrap'
import Imgbck from '../../../img/bikeherosection.jpg'







export const Home = () => {
  return (
    <>
      <Container fluid>
        <h4>
          Bienvenido a Scoobike
        </h4>
        <Row className='Row-hero'>
          <Col className='col-main' lg={12} xs={10}>
            <img className='bck-img-home' src={Imgbck}></img>



          </Col>
        </Row>
      </Container>
      <OurServices />
      

    </>
  )
}
