import React from 'react';
import { About } from './app/layouts/About/about';
import { Repairs } from './app/layouts/repairs/Repairs';
import { Home } from './app/layouts/home/Home';
import { Login } from './app/layouts/login/Login';
import { NewAppointment } from './app/layouts/newAppointment/NewAppointment';
import { CatchAppointmentAsUser } from './app/layouts/userAppointment/UserAppointment';
import { Register } from './app/layouts/register/Register';
import { Profile } from './app/layouts/profile/profile';
import { GetAllUsers } from './app/layouts/getUsersAsAdmin/GetUsers';
import { UserDetails } from './app/layouts/getUsersAsAdmin/UserDetail/GetUsersDetail';
import { Route, Routes } from 'react-router-dom';
import NavBar from './app/components/NavBar/NavBar';
import { Footer } from './app/components/footer/Footer';
import { UpdateAppointmentAsUser } from './app/layouts/updateAppointment/UpdateAppointmentAsUser';
import { ProfileUpdate } from './app/layouts/profile/update/profileUpdate';

export const Router = () => {
  return (
    <>
    <NavBar/>
    <hr/>
    <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/login' element={<Login/>} />;
        <Route path='/register' element={<Register/>} />;
        <Route path='/repairs' element={<Repairs/>} />;
        <Route path='/about' element={<About/>} />;
        <Route path='/user/profile' element={<Profile/>}/>;
        <Route path='/user/profile/update' element={<ProfileUpdate />} />
        <Route path='/newappointment' element={<NewAppointment/>}/>;
        <Route path='/appointment/myappointment' element={<CatchAppointmentAsUser/>}/>;
        <Route path='/user/all' element={<GetAllUsers />} />
        <Route path='/user/all/details' element={<UserDetails />} />
        <Route path='/updateappointment' element= {<UpdateAppointmentAsUser/>} />
    </Routes>
    <Footer/>
    </>
  )
}