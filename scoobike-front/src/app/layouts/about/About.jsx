import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




export const About = () => {
  return (
    <div className="repairs-container">
      <div className="repairs-header">
        <h2 className='stroke-text'>SERVICIOS PARA PATINETE:</h2>
      </div>
      <div className="cards-services" >
        <Card className='card'>
          <Card.Body>
            <Card.Title>REVISIÓN TOTAL</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Revisamos el patinete en su totalidad para garantizar que puedas circular sin problemas.
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Solicitar cita</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Body>
            <Card.Title>REPARACIÓN HOLGURA</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Reparamos la holgura del manillar para evitar que se parta en algún bache. 
            Esto también mejora la sensación de fluidez mientras circulas y dejarás de escuchar ese "cracketeo" 
            tan molesto.
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Solicitar cita</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Body>
            <Card.Title>RUEDA: HINCHADO O RECAMBIO</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Si la presión de las ruedas no es óptima, podemos perder adherencia y exponernos a un accidente. 
              En Scoobike ajustaremos la presión para que todo vaya sobre ruedas y si es necesario realizaremos el cambio por una nueva.
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Solicitar cita</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Body>
            <Card.Title>INSTALACIÓN DE SUSPENSIÓN</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Si notas demasiado esos pequeños baches y te resultan excesívamente incómodos podemos instalar
              una suspensión que haga tu trayecto mucho mas confortable. No vas a creer que vas en patinete cuando lo pruebes!
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Solicitar cita</Button>
          </Card.Body>
        </Card>


      </div>
    </div>
  )
}
