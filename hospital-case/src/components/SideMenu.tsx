import React from 'react'
import CreateNewHospitalButton from '../features/Hospitals/CreateNewHospitalButton'
import CreateNewPatientButton from '../features/Patients/CreateNewPatientButton'
import NavList from './NavList'
import { useNavigate } from 'react-router'

const SideMenu = () => {
    const navigate = useNavigate()
    const createNewHospitalHandler = () => {
        navigate('/hospital/form/new')
    }
    const createNewPatientHandler = () => {
        navigate('patient/form/new')
    }
    return (
        <React.Fragment>
            <div
                className="d-flex flex-column justify-content-between"
                style={{ border: '1px solid lightgrey' }}
            >
                <NavList />
                <div className="d-flex flex-column">
                    <CreateNewHospitalButton
                        onClick={createNewHospitalHandler}
                    />
                    <CreateNewPatientButton onClick={createNewPatientHandler} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideMenu
