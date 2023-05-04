import axios from 'axios';
import { Await } from 'react-router-dom';

const root = "http://localhost:3000";

export const logMe = async (body) => {
    return await axios.post(`${root}/login`, body);
};

export const newUser = async (body) => {
    return await axios.post(`${root}/user`, body)
}

export const getUserData = async (token) => {
    let config = {        headers: { Authorization: `Bearer ${token}` }    };
    return await axios.get(`${root}/user/myprofile`, config)
}

// export const getTodosUsers = async () => {
//   let token = credentials.token
//   let config = {        headers: { Authorization: `Bearer ${token}` }    };
//   return await axios.get(`${root}/user/all`, config)
// }


export const getTodosUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/user/all`, config);
}

export const nuevoAppointment = async (body, token) => {
    let config = {        headers: { Authorization: `Bearer `+token }    };
    return await axios.post(`${root}/appointment`, body, config)
}
export const getAppointmentAsUser = async (token) => {
  let config = {        headers: { Authorization: `Bearer `+token }    };
  return await axios.get(`${root}/appointmentuser`, config,)
}
export const updateAppointment = async (id, body, token) => {
  let config = {        headers: { Authorization: `Bearer `+token }    };
  return await axios.put(`${root}/appointment/update/${id}`,body, config,)
}
export const getAllAppoinment = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/appointments`, config)
}
export const userUpdate = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
  return await axios.put(`${root}/user/update/`, body, config)
}