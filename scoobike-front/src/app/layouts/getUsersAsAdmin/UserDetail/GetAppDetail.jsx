import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Form, useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import { userData } from '../../userSlice';
import { userUpdateAsAdmin } from '../../services/apiCalls';


export const AppointmentDetails = () => {

    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx?.credentials?.email;
    const navigate = useNavigate();
    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    const updateUser = () => {
        setTimeout(() => {
            navigate("/user/update/updateAsAdmin");
        }, 2500);
    };

    return (
        <>
            <div className=''>
                <div className='texto'>Fecha: </div>
                {detailRedux?.choosenObject?.date}
                <div className='texto'>ID del Mecánico: </div>
                {detailRedux?.choosenObject?.mechanic_id}
                <div className='texto'>Nombre cliente: </div>
                {detailRedux?.choosenObject?.name}
            </div>
            <Button variant="primary" onClick={updateUser}>
                Modificar cita usuario
            </Button>

        </>
    )
}