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
        removeHospital: (state, action: PayloadAction<Hospital>) => {
            state.hospitalList = state.hospitalList.filter(hospital => hospital.hospitalId !== action.payload.hospitalId)
        },
        updateHospital: (state, action: PayloadAction<Hospital>) => {
            state.hospitalList = state.hospitalList.map((hospital) => {
                if(hospital.hospitalId === action.payload.hospitalId){
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
export default hospitalsSlice.reducer