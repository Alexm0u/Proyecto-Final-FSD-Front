import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector, } from "react-redux";

import { getUserData, nuevoAppointment } from "../services/apiCalls";
import { userData } from "../userSlice";
import { appointmentData } from "../appointmentSlice";
import "./newAppointment.css";
import { InputText } from "../../components/InputText/InputText";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export const NewAppointment = () => {
  const navigate = useNavigate();
  const ReduxCredentials = useSelector(userData);
  const detallesAppointment = useSelector(appointmentData);

  const [services, setServices] = useState([
    {
      id: 1,
      servicename: "Cleaning"
    },
    {
      id: 2,
      servicename: "Broken Teeth"
    }
  ]);
  const [mechanics, setMechanics] = useState([
    {
      id: 1,
      specialtyname: "Orthodontics"
    },
    {
      id: 2,
      specialtyname: "Oral Surgery"
    }
  ]);

  const [appointments, setAppointments] = useState({
    service_id: "",
    doctor_id: "",
    user_id: ReduxCredentials.credentials.usuario.userId,
    payment_id: "",
    date: "",
  });

  const inputHandler = (e) => {
    console.log(e.target.value);
    setAppointments((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(appointments);

  const checkError = (e) => { };
  //

  const registerappointment = () => {
    nuevoAppointment(appointments, ReduxCredentials.credentials.token)
      .then((resultado) => {
        setAppointments(resultado.data);
        console.log(resultado);

        setTimeout(() => {
          navigate("/user/profile");
        }, 1000);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <NavBar />
      <hr />
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>Nueva cita</h4>
        <Form>
          <Form.Select name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Escoge servicio:</option>
            {/* <option value="1">Extraccion</option>
            <option value="2">Blanqueamiento</option> */}

            {services.map((service) => {
              return (
                <option key={service.id} value={service.id}>{service.servicename}</option>
              )
            })}
          </Form.Select>
          <Form.Select name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Escoge mecánico y especialidad:</option>

            {mechanics.map((mechanic) => {
              return (
                <option key={mechanic.id} value={mechanic.id}>{mechanic.specialtyname}</option>
              )
            })}
          </Form.Select>
          <Form.Group>
            <Form.Label>Fecha y hora:</Form.Label>
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
            <Button variant="primary" onClick={registerappointment}>
              Crear cita
            </Button>
          </div>
        </Form>
      </div>
      <Footer/>
      </>
  );
};
