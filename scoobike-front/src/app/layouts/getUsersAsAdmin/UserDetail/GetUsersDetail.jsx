
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Form, useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import { userData } from '../../userSlice';
import { userUpdateAsAdmin } from '../../services/apiCalls';


export const UserDetails = () => {

    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx?.credentials?.email;
    const navigate = useNavigate();
    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    const updateUser = () => {
        setTimeout(() => {
            navigate("/user/all/details/updateasadmin");
        }, 2500);
    };

    return (
        <>

            <div className=''>
                <div className='texto'>Nombre Usuario: </div>
                {detailRedux?.choosenObject?.name}
                <div className='texto'>Email: </div>
                {detailRedux?.choosenObject?.email}
                <div className='texto'>DNI: </div>
                {detailRedux?.choosenObject?.dni}
                <div className='texto'>Teléfono: </div>
                {detailRedux?.choosenObject?.phone}
                <div className='texto'>Role Id: </div>
                {detailRedux?.choosenObject?.role_id}
                <div className='texto'>Comments: </div>
                {detailRedux?.choosenObject?.comments}
            </div>
            <Button variant="primary" onClick={updateUser}>
                Modificar datos usuario
            </Button>

        </>
    )
}