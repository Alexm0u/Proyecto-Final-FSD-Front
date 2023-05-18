import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Form, useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import { userData } from '../../userSlice';
import { userUpdateAsAdmin } from '../../services/apiCalls';
import './GetUsersDetail.css'


export const UserDetails = () => {

    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx?.credentials?.email;
    const navigate = useNavigate();
    const detailRedux = useSelector(detailData);

    const updateUser = () => {
        setTimeout(() => {
            navigate("/user/all/details/updateasadmin");
        }, 2500);
    };

    return (
        <>
        <div className="details-container minheight">

            <div className='one-user-details'>
                <div className='texto'>NOMBRE USUARIO: </div>
                {detailRedux?.choosenObject?.name}
                <div className='texto'>EMAIL: </div>
                {detailRedux?.choosenObject?.email}
                <div className='texto'>DNI: </div>
                {detailRedux?.choosenObject?.dni}
                <div className='texto'>TELÉFONO: </div>
                {detailRedux?.choosenObject?.phone}
                <div className='texto'>ROLE ID (1 USUARIO / 2 MECÁNICO / 3 ADMIN): </div>
                {detailRedux?.choosenObject?.role_id}
                <div className='texto'>COMENTARIOS: </div>
                {detailRedux?.choosenObject?.comments}
            </div>
            <Button className variant="primary" onClick={updateUser}>
                Modificar datos usuario
            </Button>
            </div>

        </>
    )
}