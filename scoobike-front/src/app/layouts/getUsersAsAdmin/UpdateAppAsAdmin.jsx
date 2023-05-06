import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import { detailData } from '../detailSlice';
// import { userData } from '../userSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { appUpdateAsAdmin, userUpdateAsAdmin } from '../services/apiCalls';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { InputText } from '../../components/InputText/InputText';
import { validate } from '../../helpers/useful';
import { appointmentData } from '../appointmentSlice';
import { userData } from '../userSlice';

export const UpdateAppAsAdmin = () => {
    //conexion a RDX en modo lectura
    const detailRedux = useSelector(appointmentData);
    const params = detailRedux?.choosenObject?.id;
    const email = detailRedux?.choosenObject?.email;
    const detallesAppointment = useSelector(appointmentData);
    const credentialsRdx = useSelector(userData);
    // const navigate = useNavigate();

    const [services, setServices] = useState([
        {
            id: 1,
            servicename: "Reparación Bici/Patinete"
        },
        {
            id: 2,
            servicename: "Revisión completa Bici/Patinete"
        }
    ]);
    const [mechanics, setMechanics] = useState([
        {
            id: 1,
            specialtyname: "Bici: Miguel Herranz"
        },
        {
            id: 2,
            specialtyname: "Patinete: Jose Miguel Camps"
        }
    ]);
    const [appointments, setAppointments] = useState({
        id: params,
        service_id: "",
        mechanic_id: "",
        // user_id: "",
        date: "",
    });

    const inputHandler = (e) => {
        setAppointments((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [valiAppointment, setValiAppointment] = useState({

        nameVali: false,
        phoneVali: false,
        emailVali: true,

    });

    const [appointmentError, setAppointmentError] = useState({

        nameError: "",
        phoneError: "",
        emailError: "",

    });

    const [registerAct, setRegisterAct] = useState(false);
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        for (let error in appointmentError) {
            if (appointmentError[error] != "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let empty in appointments) {
            if (appointments[empty] === "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let validated in valiAppointment) {
            if (valiAppointment[validated] === false) {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });

    const checkError = (e) => {
        let error = "";
        let checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = checked.message;
        setValiAppointment((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));

        setAppointmentError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const updateUserAppointment = () => {
        appUpdateAsAdmin(params, credentialsRdx?.credentials?.token);
        setWelcome(`Datos actualizados correctamente`);
        setTimeout(() => {
            Navigate("/appointment/getall");
        }, 2500);
    };

    return (
        <div className="container">
            <div className="appointment-form" style={{ display: "block", width: 700, padding: 30 }}>
                <h4>Modificar cita</h4>
                <Form>
                    <Form.Select className="dropdown" name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                        <option>Escoge servicio:</option>


                        {services.map((service) => {
                            return (
                                <option key={service.id} value={service.id}>{service.servicename}</option>
                            )
                        })}
                    </Form.Select>
                    <Form.Select className="dropdown" name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                        <option>Escoge mecánico y especialidad:</option>

                        {mechanics.map((mechanic) => {
                            return (
                                <option key={mechanic.id} value={mechanic.id}>{mechanic.specialtyname}</option>
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
            </div>
        </div>


    );

}
