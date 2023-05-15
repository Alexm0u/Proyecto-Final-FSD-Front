import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Imgtaller from '../../../img/backgroundhome.jpg'





export const About = () => {
  return (
    <Container>
      <Row>
        <p>¿Tienes averiado tu patinete eléctrico? En nuestro taller de patinetes eléctricos en Valencia podemos repararlo. Tenemos un amplio stock de repuestos y recambios de calidad de las principales marcas: Cecotec, SmartGyro, E-Twow … siendo también servicio especializado en reparación de patinetes Xiaomi.

El equipo Scoobike de expertos está completamente capacitado para el servicio técnico de patinetes eléctricos, por su increíble conocimiento y experiencia para la reparación y el mantenimiento de patinetes de todo tipo. Como sat de patinetes eléctricos podemos solucionar cualquier avería que le haya podido surgir: pinchazo, problemas de batería, fallos de motor,…

Con nuestro servicio técnico su patinete eléctrico está en buenas manos, cuidamos hasta el más mínimo detalle para que quede como el primer día.</p>

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
            <li>Ajuste eje pedalier</li>
            <li>Acortar cadena</li>
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
        <Col className='col-main' lg={12} xs={10}>
        <img className='bck-img-taller' src={Imgtaller}></img>
        </Col>
    </Row></Container>


  )
}
