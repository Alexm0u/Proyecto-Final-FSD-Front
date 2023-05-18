import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector, } from "react-redux";
import { getMechanics, getServices, getUserData, nuevoAppointment } from "../services/apiCalls";
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
    <div className="appointment-form" >
        <h4>Nueva cita</h4>
        <Form>
          <Form.Select className="dropdown" name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Servicio:</option>

            {service.map((service) => {
              return (
                <option key={service.id} value={service.id}>{service.servicename}</option>
              )
            })}
          </Form.Select>
          <div>{appointmentsError.service_idError}</div>
          <Form.Select className="dropdown" name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Tipo:</option>

            {mechanic.map((mechanic) => {
              return (
                <option key={mechanic.id} value={mechanic.id}>{mechanic.specialty}</option>
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
