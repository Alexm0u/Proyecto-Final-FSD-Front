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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {credencialesRedux?.credentials?.usuario?.roleId === 3 ? (
              <>
                <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/user/all'>Todos los usuarios</Nav.Link>
                <Nav.Link as={Link} to='/user/profile'>Perfil</Nav.Link>
              </>
              ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                  <>
                  <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/newappointment'>Nueva cita</Nav.Link>
                  <Nav.Link as={Link} to='/user/all'>Todos los usuarios</Nav.Link>
                  <Nav.Link as={Link} to='/user/profile'>Perfil</Nav.Link>
                </>
                ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                  <>
                  <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/newappointment'>Nueva cita</Nav.Link>
                  <Nav.Link as={Link} to='/appointment/myappointment'>Mis citas</Nav.Link>
                  <Nav.Link as={Link} to='/user/profile'>Perfil</Nav.Link>
                  {/* <Nav.Link as={Link} to='/appointment/myappoinment'>My Appoinment</Nav.Link> */}
                  </>
                  ) : (
                  <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Registro</Nav.Link>
              </>
                )}
            <Nav.Link as={Link} to="/about">Sobre nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default NavBar;