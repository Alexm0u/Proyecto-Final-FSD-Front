import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { addChoosen } from '../detailSlice';
import { getTodosUsers } from '../services/apiCalls';
import { userData } from '../userSlice';
import NavBar from '../../components/NavBar/NavBar';

export const GetAllUsers = () => {
    
    const [users, setUsers] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0){
            getTodosUsers(ReduxCredentials.credentials?.token)
                .then(
                    result => {
                        setUsers(result.data)
                        console.log(result)
                    }
                )
                .catch(error => console.log(error));
        }
    },[users])

    const selected = (persona) => {
      dispatch(addChoosen({ choosenObject: persona }))
        setTimeout(() => {
            navigate("/user/all/details");
          }, 500);
    }


    return (
        <>
        <NavBar />
        <hr />
        <div className='usersDesign'>
            {  users.length > 0 ? 
                (<div>
                    {
                        users.map(
                            persona => {
                                return (
                                    <div 
                                        onClick={()=>selected(persona)} 
                                        key={persona.id}>
                                        {persona.name}
                                    </div>
                                )
                            }
                        )
                    }
                </div>)
                : 
                (<div>A continuación se muestran los usuarios</div>)
            }
         </div>
         <Footer/>
         </>
    );
}