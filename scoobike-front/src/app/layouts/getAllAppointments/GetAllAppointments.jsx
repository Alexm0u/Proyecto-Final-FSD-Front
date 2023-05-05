import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllAppoinment } from "../services/apiCalls";

import { userData } from "../userSlice";

export const GetAllAppointment = () => {
    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

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
        dispatch(addChoosen({ choosenObject: appointment}))
        setTimeout(() => {
            navigate("/user/all/details");
        }, 500);
    }

    return (
        <>
            <div>
                Todas las citas agendadas :
                {appointments.length > 0 ? (
                    <div className="cardsContainer">
                        {appointments.map((appointment) => {
                            return (
                                <div key={appointment.id}>
                                    <ul>
                                        <div> {appointment.date}</div>
                                        <div> Mechanico ID: {appointment.mechanic_id}</div>
                                        <div> Nombre Cliente: {appointment.User.name}</div>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <ProgressBar animated now={45} />
                )}
            </div>
        </>
    );
};