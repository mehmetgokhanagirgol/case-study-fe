import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Patient, PatientsState } from "./patientTypes";

const initialState: PatientsState = {
    patients: []
}

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action: PayloadAction<Patient>) => {
            state.patients = [...state.patients, action.payload]
        },
        removePatient: (state, action: PayloadAction<Patient>) => {
            state.patients = state.patients.filter(patient => patient.patientId !== action.payload.patientId)
        },
        updatePatient: (state, action: PayloadAction<Patient>) => {
            state.patients = state.patients.map((patient) => {
                if(patient.patientId === action.payload.patientId){
                    return {
                        ...patient,
                        ...action.payload
                    }
                }
                else{
                    return patient
                }
            })
        }
    }
})

export const {addPatient, removePatient, updatePatient} = patientsSlice.actions
export default patientsSlice.reducer