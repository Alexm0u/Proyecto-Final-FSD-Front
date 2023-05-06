import React from 'react';
import { About } from './app/layouts/About/about';
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
import { GetAllAppointment } from './app/layouts/getAllAppointments/GetAllAppointments';
import { UpdateUserAsAdmin} from './app/layouts/getUsersAsAdmin/UpdateUserAsAdmin';
import { UpdateAppAsAdmin } from './app/layouts/getUsersAsAdmin/UpdateAppAsAdmin';
import { AppointmentDetails } from './app/layouts/getUsersAsAdmin/UserDetail/GetAppDetail';
import { GetMyAppointmentAsMechanic } from './app/layouts/getAllAppointments/GetAllAppAsMech';

export const Router = () => {
  return (
    <>
    <NavBar/>
    <hr/>
    <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/login' element={<Login/>} />;
        <Route path='/register' element={<Register/>} />;
        <Route path='/about' element={<About/>} />;
        <Route path='/user/profile' element={<Profile/>}/>;
        <Route path='/user/profile/update' element={<ProfileUpdate />} />
        <Route path='/newappointment' element={<NewAppointment/>}/>;
        <Route path='/appointment/myappointment' element={<CatchAppointmentAsUser/>}/>;
        <Route path='/appointmentAsMechanic' element={<GetMyAppointmentAsMechanic/>}/>;
        <Route path='/user/all' element={<GetAllUsers />} />
        <Route path='/user/all/details' element={<UserDetails />} />
        <Route path='/updateappointment' element= {<UpdateAppointmentAsUser/>} />
        <Route path='/appointment/getall' element={<GetAllAppointment/>} />
        <Route path='/user/all/details/updateasadmin' element={<UpdateUserAsAdmin/>} />
        <Route path='/user/update/updateAsAdmin' element={<UpdateAppAsAdmin/>} />
        <Route path='/appointment/all/details' element={<AppointmentDetails />} />
    </Routes>
    <Footer/>
    </>
  )
}