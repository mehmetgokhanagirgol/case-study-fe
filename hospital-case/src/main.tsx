import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import PatientGrid from './features/Patients/PatientGrid.tsx'
import HospitalGrid from './features/Hospitals/HospitalGrid.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import HospitalFormModal from './features/Hospitals/HospitalFormModal.tsx'
import PatientFormModal from './features/Patients/PatientFormModal.tsx'
import { persistor, store } from './app/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import HospitalDetails from './features/Hospitals/HospitalDetails.tsx'
import PatientDetails from './features/Patients/PatientDetails.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route
                                index
                                element={<Navigate to="/hospital" replace />}
                            />
                            <Route path="hospital">
                                <Route index element={<HospitalGrid />} />
                                <Route
                                    path="form/:id"
                                    element={<HospitalFormModal />}
                                />
                                <Route
                                    path="view/:id"
                                    element={<HospitalDetails />}
                                />
                            </Route>
                            <Route path="patient">
                                <Route index element={<PatientGrid />} />
                                <Route
                                    path=":hospitalId"
                                    element={<PatientGrid />}
                                />
                                <Route
                                    path="form/:id"
                                    element={<PatientFormModal />}
                                />
                                <Route
                                    path="view/:id"
                                    element={<PatientDetails />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
)
