import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector, } from "react-redux";
import { getMechanics, getServices, updateAppointment } from "../services/apiCalls";
import { userData } from "../userSlice";
import { appointmentData } from "../appointmentSlice";
// import "./newAppointment.css";
import { InputText } from "../../components/InputText/InputText";
import { useNavigate } from "react-router-dom";


export const UpdateAppointmentAsUser = () => {
  const navigate = useNavigate();
  const ReduxCredentials = useSelector(userData);
  const detallesAppointment = useSelector(appointmentData);
  const params = detallesAppointment.choosenAppointment.id

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
    id: params,
    service_id: "",
    mechanic_id: "",
    user_id: ReduxCredentials.credentials.usuario.userId,
    date: "",
  });

  const inputHandler = (e) => {
    setAppointments((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const checkError = (e) => { };
  //

  const actualizarAppointment = () => {
    updateAppointment(params, appointments, ReduxCredentials.credentials.token)
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
        <h4>Modificar cita</h4>
        <Form>
        <Form.Select className="dropdown" name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Servicio:</option>

            {service.map((service) => {
              return (
                <option key={service.id} value={service.id}>{service.servicename}</option>
              )
            })}
          </Form.Select>
          <Form.Select className="dropdown" name={"mechanic_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
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
            <Button variant="primary" onClick={actualizarAppointment}>
              Modificar cita
            </Button>
          </div>
        </Form>
      </div>
    </div>
      


  );
};
