import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { ProgressBar } from "react-bootstrap";
import { getAppointmentasMechanic } from "../services/apiCalls";
import { useEffect, useState } from "react";


export const GetMyAppointmentAsMechanic = () => {
    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (appointments.length === 0) {
            getAppointmentasMechanic(ReduxCredentials?.credentials?.token)
                .then(result => {
                    setAppointments(result.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [appointments]);

    return (
        <>

            <div className="container-allapp minheight">Mis citas como mecánico:
                { appointments.length > 0 ? 
                    (<div className="cardsContainer">
                        {
                        appointments.map(
                            appointment => {
                            return (
                                <div
                                    key={appointment.id}>
                                    <div> {appointment.date}</div>            
                                </div>
                            )
                            }
                        )
                        }  
                        </div>)
                        :
                        ( <ProgressBar animated now={45} />)
                    
                    }
                    </div>
        </>
    );
};
