import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllAppoinment } from "../services/apiCalls";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { addChoosen } from "../detailSlice";

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

    const selected = (appointment) => {
        dispatch(addChoosen({ choosenObject: appointment }))
        setTimeout(() => {
            navigate("/appointment/all/details");
        }, 500);
    }

    return (
        <>
            <div>
                Todas las citas agendadas :
                {appointments.length > 0 ? (
                    <div className="cardsContainer">
                        {appointments.map(appointment => {
                            return (
                                <div onClick={() => selected(appointment)} key={appointment.id}>
                                    <div> {appointment.date}</div>
                                    <div> Mecanico ID: {appointment.mechanic_id}</div>
                                    <div> Nombre Cliente: {appointment.User.name}</div>
                                </div>
                            );
                        })}
                    </div>
                ) : (<div>A continuación se muestran todas las citas</div>)}
            </div>
        </>
    );
};