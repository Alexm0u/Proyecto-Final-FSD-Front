import React, {useState, useEffect} from 'react';
import './Profile.css';
import { validate } from '../../helpers/useful';
import Button from 'react-bootstrap/Button';
import { getUserData } from '../services/apiCalls';
import { userData } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { detailData } from '../detailSlice';
import NavBar from '../../components/NavBar/NavBar';
import { Footer } from '../../components/footer/Footer';


export const Profile = () => {
  const [users, setUsers] = useState({
      name: "",
      surname: "",
      nif: "",
      birth_date: "",
      direction: "",
      email: "",
      phone: ""
  }
  );
  const ReduxCredentials = useSelector(userData);

  useEffect(() => {
      if (users.name === "") {
          getUserData(ReduxCredentials.credentials.token)
          .then((result) => {
          console.log(result.data.data);
          setUsers({
              name: result.data.data.name,
              email: result.data.data.email,
              dni: result.data.data.dni,
              phone: result.data.data.phone,
              role_id: result.data.data.role_id,
          });
          })
          .catch((error) => console.log(error));
      }
  }, [users]);
  console.log(users);
   return (
      <>
      <NavBar />
      <hr />
       <div className='divCard'>
          <Card style={{ width: '20rem' }}>
              <ListGroup variant="flush">
                  <ListGroup.Item>Nombre: {users.name}</ListGroup.Item>
                  <ListGroup.Item>Email: {users.email}</ListGroup.Item>
                  {/* <ListGroup.Item>Dni_Nif: {users.dni_nif}</ListGroup.Item>
                  <ListGroup.Item>Phone number: {users.phone}</ListGroup.Item> */}
              </ListGroup>
          </Card>
       </div>
       <Footer/>
       </>
   )
}