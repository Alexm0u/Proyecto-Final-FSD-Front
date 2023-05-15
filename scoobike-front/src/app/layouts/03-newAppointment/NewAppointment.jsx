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
import { validate } from "../../helpers/useful";


export const NewAppointment = () => {
  const navigate = useNavigate();
  const ReduxCredentials = useSelector(userData);
  const detallesAppointment = useSelector(appointmentData);

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
    service_id: "",
    mechanic_id: "",
    user_id: ReduxCredentials.credentials.usuario.userId,
    date: "",
  });

  const [appointmentsError, setAppointmentsError] = useState({
    service_idError: "",
    mechanic_idError: "",
    dateError: "",
});

const [valiAppointments, setValiAppointments] = useState({
    service_idVali: false,
    mechanic_idVali: false,
    dateVali: false,
});

const [registerAct, setRegisterAct] = useState(false);

const inputHandler = (e) => {
    setAppointments((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
};

useEffect(() => {
    for (let error in appointmentsError) {
        if (appointmentsError[error] !== "") {
            setRegisterAct(false);
            return;
        }
    }
    for (let vacio in appointments) {
        if (appointments[vacio] === "") {
            setRegisterAct(false);
            return;
        }
    }
    for (let validated in valiAppointments) {
        if (valiAppointments[validated] === false) {
            setRegisterAct(false);
            return;
        }
    }
    setRegisterAct(true);
});
console.log (valiAppointments, appointments)
const checkError = (e) => {
    let error = "";
    const checked = validate(
        e.target.name,
        e.target.value,
        e.target.required
    );
    error = checked.message;

    setValiAppointments((prevState) => ({
        ...prevState,
        [e.target.name + "Vali"]: checked.validated,
    }));

    setAppointmentsError((prevState) => ({
        ...prevState,
        [e.target.name + "Error"]: error,
    }));;
  };

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

    <div className="container minheight">
    <div className="appointment-form" style={{ display: "block", width: 700, padding: 30 }}>
        <h4>Nueva cita</h4>
        <Form>
          <Form.Select className="dropdown" name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Escoge servicio:</option>

            {services.map((service) => {
              return (
                <option key={service.id} value={service.id}>{service.servicename}</option>
              )
            })}
          </Form.Select>
          <div>{appointmentsError.service_idError}</div>
          <Form.Select className="dropdown" name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Escoge mecánico y especialidad:</option>

            {mechanics.map((mechanic) => {
              return (
                <option key={mechanic.id} value={mechanic.id}>{mechanic.specialtyname}</option>
              )
            })}
          </Form.Select>
          <div>{appointmentsError.mechanic_idError}</div>
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
          <div>{appointmentsError.dateError}</div>
          <br />
          <div className="botonModificar">
            <Button variant="primary" onClick={registerappointment}>
              Crear cita
            </Button>
          </div>
        </Form>
      </div>
    </div>
      


  );
};
