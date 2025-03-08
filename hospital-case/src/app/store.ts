import { combineReducers, configureStore } from "@reduxjs/toolkit";
import hospitalsReducer from '../features/Hospitals/hospitalsSlice';
import patientsReducer from '../features/Patients/patientsSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { Persistor } from "redux-persist/lib/types";

const rootReducer = combineReducers({
    hospitals: hospitalsReducer,
    patients: patientsReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store)
export type AppPersistor = Persistor;
