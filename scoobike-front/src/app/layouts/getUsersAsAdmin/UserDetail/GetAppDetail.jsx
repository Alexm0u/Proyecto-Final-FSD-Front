import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../userSlice';



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
            <div className='appointments-list'>
                <div className='texto'>Fecha: </div>
                {detailRedux?.choosenObject?.date}
                <div className='texto'>ID del Mecánico: </div>
                {detailRedux?.choosenObject?.mechanic_id}
                <div className='texto'>Nombre cliente: </div>
                {detailRedux?.choosenObject?.User.name}
            </div>
            <Button variant="primary" onClick={updateUser}>
                Modificar cita usuario
            </Button>

        </>
    )
}