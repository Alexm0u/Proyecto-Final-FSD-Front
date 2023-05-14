import React from 'react';
import { About } from './app/layouts/04-about/about';
import { Home } from './app/layouts/00-home/Home';
import { Login } from './app/layouts/01-login/Login';
import { NewAppointment } from './app/layouts/03-newAppointment/NewAppointment';
import { CatchAppointmentAsUser } from './app/layouts/06-userAppointment/UserAppointment';
import { Register } from './app/layouts/02-register/Register';
import { Profile } from './app/layouts/05-profile/profile';
import { GetAllUsers } from './app/layouts/09-asAdmin/GetUsers';
import { UserDetails } from './app/layouts/09-asAdmin/UserDetail/GetUsersDetail';
import { Route, Routes } from 'react-router-dom';
import NavBar from './app/components/NavBar/NavBar';
import { Footer } from './app/components/footer/Footer';
import { UpdateAppointmentAsUser } from './app/layouts/08-updateAppointment/UpdateAppointmentAsUser';
import { ProfileUpdate } from './app/layouts/05-profile/update/profileUpdate';
import { GetAllAppointment } from './app/layouts/07-getAllAppointments/GetAllAppointments';
import { UpdateUserAsAdmin} from './app/layouts/09-asAdmin/UpdateUserAsAdmin';
import { UpdateAppAsAdmin } from './app/layouts/09-asAdmin/UpdateAppAsAdmin';
import { AppointmentDetails } from './app/layouts/09-asAdmin/UserDetail/GetAppDetail';
import { GetMyAppointmentAsMechanic } from './app/layouts/07-getAllAppointments/GetAllAppAsMech';

export const Router = () => {
  return (
    <>
    <NavBar/>
    <br />
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