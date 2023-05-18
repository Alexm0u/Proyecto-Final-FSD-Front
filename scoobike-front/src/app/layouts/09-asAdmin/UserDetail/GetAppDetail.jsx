import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../userSlice';
import './GetAppDetail.css'



export const AppointmentDetails = () => {

    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx?.credentials?.email;
    const navigate = useNavigate();
    const detailRedux = useSelector(detailData);

    const updateUser = () => {
        setTimeout(() => {
            navigate("/user/update/updateAsAdmin");
        }, 2500);
    };

    return (
        <>
            <div className='appointments-list minheight'>
                <div className='texto'>Fecha: </div>
                {detailRedux?.choosenObject?.date}
                <div className='texto'>ID del Mecánico: </div>
                {detailRedux?.choosenObject?.mechanic_id}
                <div className='texto'>Nombre cliente: </div>
                {detailRedux?.choosenObject?.User.name}
                <div><Button className='boton' variant="primary" onClick={updateUser}>
                Modificar cita usuario
            </Button></div>
                
            </div>
            
            

        </>
    )
}