import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path='hospital' />
                        <Route path="hospital/:hospitalId" />
                        <Route path='patient'/>
                        <Route path='patient/:patientId' />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
