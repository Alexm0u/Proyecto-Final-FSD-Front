import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChoosen } from '../detailSlice';
import { getTodosUsers } from '../services/apiCalls';
import { userData } from '../userSlice';
import './GetUsers.css'


export const GetAllUsers = () => {

    const [users, setUsers] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (users.length === 0) {
            getTodosUsers(ReduxCredentials.credentials?.token)
                .then(
                    result => {
                        setUsers(result.data)
                        console.log(result)
                    }
                )
                .catch(error => console.log(error));
        }
    }, [users])

    const selected = (persona) => {
        dispatch(addChoosen({ choosenObject: persona }))
        setTimeout(() => {
            navigate("/user/all/details");
        }, 500);
    }

    return (
        <>
            <div className="d-flex justify-content-center flex-column align-items-center minheight">
        <h2>Todas los usuarios de Scoobike:</h2>
        <div>
          <p>Pincha en el usuario para ver mas detalles:</p>
        </div>

        <div className="cardsContainer">
          {users.map((persona) => {
            return (
              <div
                className="userCardDesign"
                onClick={() => selected(persona)}
                key={persona.id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="pe-4 nameFieldDesign">Usuario:</p>
                    <p>
                      {persona.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    );
}

