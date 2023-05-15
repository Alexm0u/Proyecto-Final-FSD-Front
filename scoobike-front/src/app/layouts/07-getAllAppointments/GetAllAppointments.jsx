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
            <div className="container-allApp minheight">
                Todas las citas agendadas :
                {appointments.length > 0 ? (
                    <div className="cardsContainer">
                        {appointments.map(appointment => {
                            return (
                                <div  className="app-card" onClick={() => selected(appointment)} key={appointment.id}>
                                    <div className="text"> NOMBRE CLIENTE: {appointment.User.name}</div>
                                    <div className="text">FECHA: {appointment.date}</div>
                                    <div className="text"> MECÁNICO ID: {appointment.mechanic_id}</div>
                                    
                                </div>
                            );
                        })}
                    </div>
                ) : (<div>A continuación se muestran todas las citas</div>)}
            </div>
        </>
    );
};