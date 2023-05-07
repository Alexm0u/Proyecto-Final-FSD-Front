import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';





export const About = () => {
  return (
    <div className="repairs-container">
      <div class="card">
        <div class="card-header">
          <h1 class="card-title">Servicios para Patinete</h1>
        </div>
        <div class="card-body">
          <li>Revisión completa</li>
          <li>Reparación holgura del manillar</li>
          <li>Cambio de rueda</li>
          <li>Hinchado ruedas</li>
          <li>Revisión frenos</li>
          <li>Instalación amortiguación</li>
          <li>Recambios por rotura</li>

        </div>
        <div class="card-footer">
          <Button className='boton-cita' variant="primary" href='/login'>Solicita cita</Button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1 class="card-title">Servicios para Bicicleta</h1>
        </div>
        <div class="card-body">
          <li>Revisión completa</li>
          <li>Reparación y revisión frenos (disco o pastilla)</li>
          <li>Cambio de rueda o reparación pinchazo</li>
          <li>Hinchado ruedas</li>
          <li>Recambios por rotura</li>
        </div>
        <div class="card-footer">
          <Button className='boton-cita' variant="primary" href='/login'>Solicita cita</Button>
        </div>
      </div>


    </div>
  )
}
