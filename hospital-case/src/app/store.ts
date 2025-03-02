import { combineReducers, configureStore } from "@reduxjs/toolkit";
import hospitalsReducer from '../features/Hospitals/hospitalsSlice'
import patientsReducer from '../features/Patients/patientsSlice'

const rootReducer = combineReducers({
    hospitals: hospitalsReducer,
    patients: patientsReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
} 

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>