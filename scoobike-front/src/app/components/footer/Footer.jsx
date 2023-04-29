import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'



export const Footer = () => {
    return (
    <>
<div className="Foot" >
    <Container >
<Row>
        <Col className='margin mt-2'>  
        <h4>Scoobike</h4>
        <p> <i className="bi bi-geo-alt"></i> C/Serrería, 13</p>
        <p> <i className="bi bi-globe-europe-africa"></i> 46011, Valencia</p>
        </Col>
    <Col className='margin mt-2'>
        <h4>Contact</h4>
        <p> <i className="bi bi-telephone"></i> +34 123 456 789 </p>
        <p> <i className="bi bi-envelope-open-heart"></i> info@scoobike.com </p>
        </Col>
    <Col className='margin mt-2'>
            <h4>Horario</h4>
            <p><i className="bi bi-clock"></i> Lunes a Viernes</p>
            <p> 9:00am to 20:30pm </p>
        </Col>
    <Row>
            <Col className='W1 mt-3 mb-1'><h3><i className="bi bi-whatsapp"></i></h3></Col>
            <Col className='W2 mt-3 mb-1'><h3><i className="bi bi-facebook"></i></h3></Col>
            <Col className='W3 mt-3 mb-1'><h3><i className="bi bi-instagram"></i></h3></Col>
    </Row>
    <Row>
        <Col className='Copy mt-2'>
            <p>&copy;{new Date().getFullYear()} Created by Alexm0u - All Rights Reserved </p>
            </Col>
    </Row>
</Row>
    </Container>
</div>
    </>
    )
}
