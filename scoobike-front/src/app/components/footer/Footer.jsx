import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import { Whatsapp, Instagram, Facebook, Twitter, Youtube, Linkedin, Wechat } from 'react-bootstrap-icons';



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
            <p> 10:00h a 14:00h y de 16:00h a 20:00h </p>
        </Col>
    <Row>
            <Col className='W1 mt-3 mb-1'><h3><Whatsapp/><i className="bi bi-whatsapp" ></i></h3></Col>
            <Col className='W2 mt-3 mb-1'><h3><Facebook/><i className="bi bi-facebook"></i></h3></Col>
            <Col className='W3 mt-3 mb-1'><h3><Instagram/><i className="bi bi-instagram"></i></h3></Col>
            
    </Row>
    <Row>
        <Col className='Copy mt-2'>
            <p>&copy;{new Date().getFullYear()} Created by Àlex Moya (Alexm0u on GitHub) - All Rights Reserved - Link to my LinkedIn <a className='text-white' href="https://www.linkedin.com/in/alejandro-moya-camps-5448a477/"><Linkedin /></a> </p>
            
            </Col>
    </Row>
    <Row></Row>
</Row>
    </Container>
</div>
    </>
    )
}
