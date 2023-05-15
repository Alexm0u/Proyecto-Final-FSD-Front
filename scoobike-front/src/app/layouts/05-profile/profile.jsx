import React, {useState, useEffect} from 'react';
import './Profile.css';
import { validate } from '../../helpers/useful';
import Button from 'react-bootstrap/Button';
import { getUserData } from '../services/apiCalls';
import { userData } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { detailData } from '../detailSlice';



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

       <div className='divCard'>
          <Card className='profileCard'>
              <ListGroup variant="flush">
                  <ListGroup.Item>NOMBRE: {users.name}</ListGroup.Item>
                  <ListGroup.Item>EMAIL: {users.email}</ListGroup.Item>
                  <ListGroup.Item>TELÉFONO: {users.phone}</ListGroup.Item>
                  <Button variant="primary" href='/user/profile/update' >Modificar datos usuario</Button>
              </ListGroup>
          </Card>
       </div>
       </>
   )
}
