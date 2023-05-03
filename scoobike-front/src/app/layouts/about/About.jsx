import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';




export const About = () => {
  return (
    <div className="repairs-container">
      <div className='patinete-services'>
        <h2>SERVICIOS PARA PATINETE:</h2>
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
              <Button variant="primary" href='/login'>Solicitar cita</Button>
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
      <div className='bici-services'>
        <h2>SERVICIOS PARA BICICLETA:</h2>
          <Card className='card'>
            <Card.Body>
              <Card.Title>REVISIÓN TOTAL</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Revisamos la bicicleta en su totalidad para garantizar que puedas circular sin problemas.
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" as={Link} to='/login'>Solicitar cita</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body>
              <Card.Title>REPARACIÓN FRENOS</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Ya sean de pastilla o discos, te ponemos a punto el sistema de frenado de tu bicicleta.
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
              <Card.Title>CUSTOMIZACIÓN</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cuéntanos tu idea y la haremos realidad.
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              a<Button variant="primary">Solicitar cita</Button>
            </Card.Body>
          </Card>

      </div>
    </div>
  )
}
