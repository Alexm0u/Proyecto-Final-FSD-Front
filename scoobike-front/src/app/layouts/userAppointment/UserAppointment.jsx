import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppointmentAsUser } from '../services/apiCalls';
import { userData } from "../userSlice";
import { Card, ListGroup, } from 'react-bootstrap';
import { addAppointment } from '../appointmentSlice';


export const CatchAppointmentAsUser = () => {

  const ReduxCredentials = useSelector(userData);

  const [appointments, setAppointments] = useState([]);

  const dispatch = useDispatch()

  const AppUpdater = (AppToUpdate) => { 
  dispatch(addAppointment({choosenAppointment:AppToUpdate}))
  console.log (AppToUpdate)}
  useEffect(() => {
    if (appointments.length === 0) {
      getAppointmentAsUser(ReduxCredentials.credentials?.token)
        .then((info) => {
          setAppointments(info.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [appointments]);
  console.log(appointments)
  return (
    <>

      <Container className="appoinment">
        <Row>
          <Col>
            <div className='usersDesign'>
              {appointments.length > 0 ?
                (<div>
                  {
                    appointments.map(
                      appointment => {
                        return (
                          <div key={appointment.id} onClick={() => AppUpdater(appointment)} >
                            <Card style={{ width: '20rem' }}>
                              <ListGroup variant="flush">
                                <ListGroup.Item>Servicio: {appointment.Service.servicename}</ListGroup.Item>
                                <ListGroup.Item>Duración: {appointment.Service.duration} min</ListGroup.Item>
                                <ListGroup.Item>Precio: {appointment.Service.price} €</ListGroup.Item>
                                <ListGroup.Item>Fecha: {appointment.date}</ListGroup.Item></ListGroup>
                                <Button variant="primary" href='/updateappointment' >Modificar cita</Button>
                            </Card>
                          </div>
                        )
                      }
                    )
                  }
                </div>)
                :
                (<div>Si tiene citas aparacerán a continuación...</div>)
              }
  
            </div>
          </Col>
        </Row>
      </Container>

      </>
  );
}
