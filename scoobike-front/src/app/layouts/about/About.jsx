import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export const About = () => {
  return (
    <div className="repairs-container">
      <div className="repairs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>TRAER TU PATINETE O BICI A NUESTRO TALLER</span>
      </div>
      <div className="cards-services">
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='card' style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      </div>
    </div>
  )
}
