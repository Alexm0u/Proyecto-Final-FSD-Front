
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import NavBar from '../../../components/NavBar/NavBar';

export const UserDetails = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    useEffect(()=>{
        console.log(detailRedux,"patata")
    },[])


     return (
        <>
        <NavBar />
        <hr />
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
         </>
     )
}