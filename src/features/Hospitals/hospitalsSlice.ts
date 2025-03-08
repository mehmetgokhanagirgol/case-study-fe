import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hospital, HospitalsState } from "./hospitalTypes";
import { RootState } from "../../app/store";

const initialState: HospitalsState = {
    hospitalList: []
}

export const hospitalsSlice = createSlice({
    name: 'hospitals',
    initialState,
    reducers: {
        addHospital: (state, action: PayloadAction<Hospital>) => {
            state.hospitalList = [...state.hospitalList, action.payload]
        },
        removeHospital: (state, action: PayloadAction<string>) => {
            state.hospitalList = state.hospitalList.filter(hospital => hospital.id !== action.payload)
        },
        updateHospital: (state, action: PayloadAction<Hospital>) => {
            state.hospitalList = state.hospitalList.map((hospital) => {
                if(hospital.id === action.payload.id){
                    return {...hospital, ...action.payload}
                }
                else{
                    return hospital
                }
            })
        }
    }
})

export const {addHospital, removeHospital, updateHospital} = hospitalsSlice.actions
export const selectHospitalList = (state: RootState) => state.hospitals.hospitalList
export const selectHospitalById = (state: RootState, id?: string) => state.hospitals.hospitalList.find((hospital) => hospital.id === id)
export default hospitalsSlice.reducer