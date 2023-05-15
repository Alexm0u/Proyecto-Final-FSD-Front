import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllAppoinment } from "../services/apiCalls";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { addChoosen } from "../detailSlice";
import './GetAllAppointments.css'

export const GetAllAppointment = () => {
    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (appointments.length === 0) {
            getAllAppoinment(ReduxCredentials?.credentials?.token)
                .then((result) => {
                    setAppointments(result.data.citasActivas);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [appointments]);

    const selected = (allAppointment) => {
        dispatch(addChoosen({ choosenObject: allAppointment }))
        setTimeout(() => {
            navigate("/appointment/all/details");
        }, 500);
    }
    console.log(appointments)
    return (
        <>
            <div className="d-flex justify-content-center flex-column align-items-center minheight">
        <h2>Todas las citas agendadas:</h2>
        <div>
          <p>Pincha en la cita para ver mas detalles:</p>
        </div>

        <div className="cardsContainer">
          {appointments.map((appointment) => {
            return (
              <div
                className="userCardDesign"
                onClick={() => selected(appointment)}
                key={appointment.id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="pe-4 nameFieldDesign">Cita:</p>
                    <p>Nombre:{appointment.User.name}</p>
                    <p>Fecha:{appointment.date}</p>
                    <p>Id del mecánico:{appointment.mechanic_id}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    );
};
