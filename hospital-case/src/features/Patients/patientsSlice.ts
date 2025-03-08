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
        removePatient: (state, action: PayloadAction<string>) => {
            state.patientList = state.patientList.filter(patient => patient.id !== action.payload)
        },
        updatePatient: (state, action: PayloadAction<Patient>) => {
            state.patientList = state.patientList.map((patient) => {
                if(patient.id === action.payload.id){
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
export const selectPatientById = (state: RootState, id?: string) => state.patients.patientList.find((patient) => patient.id === id)
export default patientsSlice.reducer