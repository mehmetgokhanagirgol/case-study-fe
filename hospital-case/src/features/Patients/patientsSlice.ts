import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Patient, PatientsState } from "./patientTypes";
import { RootState } from "../../app/store";

const initialState: PatientsState = {
    patientList: []
}

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action: PayloadAction<Patient>) => {
            state.patientList = [...state.patientList, action.payload]
        },
        removePatient: (state, action: PayloadAction<Patient>) => {
            state.patientList = state.patientList.filter(patient => patient.patientId !== action.payload.patientId)
        },
        updatePatient: (state, action: PayloadAction<Patient>) => {
            state.patientList = state.patientList.map((patient) => {
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
export const selectPatients = (state: RootState) => state.patients.patientList
export default patientsSlice.reducer