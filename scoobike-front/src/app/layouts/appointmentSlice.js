import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
      choosenAppointment: {}
    },
    reducers: {
      addAppointment: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      addAppointmentMechanic: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    }

});

export const { addAppointment, addAppointmentMechanic } = appointmentSlice.actions;

export const appointmentData = (state) => state.appointment;

export default appointmentSlice.reducer;