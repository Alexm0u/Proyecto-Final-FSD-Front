import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';





export const About = () => {
  return (
    <Container>
      <Row>

      <Col className='repairs-container' lg={6} xs={12}>


        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Servicios para Bicicleta</h1>
          </div>
          <div className="card-body">
            <li>Revisión completa</li>
            <li>Reparación y revisión frenos (disco o pastilla)</li>
            <li>Cambio de rueda o reparación pinchazo</li>
            <li>Hinchado ruedas</li>
            <li>Recambios por rotura</li>
          </div>
          <div className="card-footer">
            <Button className='boton-cita' variant="primary" href='/login'>Solicita cita</Button>
          </div>
        </div>

      </Col>
      <Col className='repairs-container'lg={6} xs={12}>
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Servicios para Patinete</h1>
          </div>
          <div className="card-body">
            <li>Revisión completa</li>
            <li>Reparación holgura del manillar</li>
            <li>Cambio de rueda</li>
            <li>Hinchado ruedas</li>
            <li>Revisión frenos</li>
            <li>Instalación amortiguación</li>
            <li>Recambios por rotura</li>

          </div>
          <div className="card-footer">
            <Button className='boton-cita' variant="primary" href='/login'>Solicita cita</Button>
          </div>
        </div></Col>
    </Row></Container>


  )
}
