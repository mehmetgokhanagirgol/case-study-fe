import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './app/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import PatientGrid from './features/Patients/PatientGrid.tsx'
import HospitalGrid from './features/Hospitals/HospitalGrid.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={setupStore()}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="hospital" element={<HospitalGrid />} />
                        <Route path="hospital/:hospitalId" />
                        <Route path="patient" element={<PatientGrid />} />
                        <Route path="patient/:patientId" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
