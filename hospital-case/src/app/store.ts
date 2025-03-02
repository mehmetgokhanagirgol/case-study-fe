import { configureStore } from "@reduxjs/toolkit";
import hospitalsReducer from '../features/Hospitals/hospitalsSlice'
import patientsReducer from '../features/Patients/patientsSlice'

export const store = configureStore({
    reducer: {
        hospitals: hospitalsReducer,
        patients: patientsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>