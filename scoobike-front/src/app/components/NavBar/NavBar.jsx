import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../../layouts/userSlice';
import { useEffect } from 'react';
import { addChoosen } from '../../layouts/detailSlice';
import  imglogo   from '../../../img/logo-scoobike.jpeg'

function NavBar() {

  const credencialesRedux = useSelector(userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };
  return (
    <div className='navbarstyle'>
    <Navbar className="NavBar" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='navbar-logo'>
              <img className='logo-scoobike' style={{width:"20rem" }} src={imglogo} alt="Logo scoobike" />
            </Link>
            <Nav.Link className='navbarButton' as={Link} to="/">Inicio</Nav.Link>
            {credencialesRedux?.credentials?.usuario?.roleId === 3 ? (
              <>
                <Nav.Link className='navbarButton' as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link className='navbarButton' as={Link} to='/user/all'>Todos los usuarios</Nav.Link>
                <Nav.Link className='navbarButton' as={Link} to='/appointment/getall'>Todas las citas</Nav.Link>
                <Nav.Link className='navbarButton' as={Link} to='/user/profile'>Perfil</Nav.Link>
              </>
              ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                  <>
                  <Nav.Link className='navbarButton' as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/newappointment'>Nueva cita</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/appointmentAsMechanic'>Todas las citas</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/user/profile'>Perfil</Nav.Link>
                </>
                ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                  <>
                  <Nav.Link className='navbarButton' as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/newappointment'>Nueva cita</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/appointment/myappointment'>Mis citas</Nav.Link>
                  <Nav.Link className='navbarButton' as={Link} to='/user/profile'>Perfil</Nav.Link>
                  
                  </>
                  ) : (
                  <>
                <Nav.Link className='navbarButton' as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link className='navbarButton' as={Link} to='/register'>Registro</Nav.Link>
              </>
                )}
            <Nav.Link className='navbarButton' as={Link} to="/about">Taller de reparación</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default NavBar;