import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { appUpdateAsAdmin, getMechanics, getServices } from '../services/apiCalls';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { InputText } from '../../components/InputText/InputText';
import { validate } from '../../helpers/useful';
import { userData } from '../userSlice';
import { detailData } from '../detailSlice';



export const UpdateAppAsAdmin = () => {
    //conexion a RDX en modo lectura
    const detalleData = useSelector(detailData)
    const params = detalleData?.choosenObject?.id;
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    const [mechanic, setMechanic] = useState([]

        );
      
        const [service, setService] = useState([]
      
        );
    useEffect(() => {
        if (mechanic.length === 0) {
            getMechanics()
                .then((result) => {
                    setMechanic(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [mechanic]);

    useEffect(() => {
        if (service.length === 0) {
            getServices()
                .then((result) => {

                    setService(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [service]);

    const [appointments, setAppointments] = useState({

        service_id: "",
        mechanic_id: "",

        date: "",
    });

    const inputHandler = (e) => {
        setAppointments((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [registerAct, setRegisterAct] = useState(false);
    const [welcome, setWelcome] = useState("");

    const checkError = (e) => {

    };

    const updateUserAppointment = () => {
        appUpdateAsAdmin(params, appointments, credentialsRdx?.credentials?.token);
        setWelcome(`Datos actualizados correctamente`);
        setTimeout(() => {
            navigate("/appointment/getall");
        }, 2500);
    };


    return (

        <Container className="minheight">
            <Row><Col>
                <h4>Modificar cita</h4>
                <Form>
                    <Form.Select  name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                        <option>Servicio:</option>

                        {service.map((service) => {
                            return (
                                <option key={service.id} value={service.id}>{service.servicename}</option>
                            )
                        })}
                    </Form.Select>
                    <Form.Select  name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                        <option>Tipo:</option>

                        {mechanic.map((mechanic) => {
                            return (
                                <option key={mechanic.id} value={mechanic.id}>{mechanic.specialty}</option>
                            )
                        })}
                    </Form.Select>
                    <Form.Group>
                        <Form.Label className="date-hour">Fecha y hora:</Form.Label>
                        <InputText
                            className={"date"}
                            type={"datetime-local"}
                            name={"date"}
                            placeholder={"date"}
                            required={true}
                            changeFunction={(e) => inputHandler(e)}
                            blurFunction={(e) => checkError(e)}
                        />
                    </Form.Group>
                    <br />
                    <div className="botonModificar">
                        <Button variant="primary" onClick={updateUserAppointment}>
                            Modificar cita
                        </Button>
                    </div>
                </Form>
            </Col></Row>
            
            
            
        </Container>


    );

}
