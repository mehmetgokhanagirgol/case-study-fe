import React, { useState } from 'react'
import CreateNewHospitalButton from '../features/Hospitals/CreateNewHospitalButton'
import CreateNewPatientButton from '../features/Patients/CreateNewPatientButton'
import NavList from './NavList'
import HospitalFormModal from '../features/Hospitals/HospitalFormModal'
import PatientFormModal from '../features/Patients/PatientFormModal'

const SideMenu = () => {
    const [isHospitalFormModalOpen, setIsHospitalFormModalOpen] =
        useState(false)
    const [isPatientFormModalOpen, setIsPatientFormModalOpen] = useState(false)
    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-between">
                <NavList />
                <div className="d-flex flex-column gap-3 mb-5">
                    <CreateNewHospitalButton
                        onClick={() => setIsHospitalFormModalOpen(true)}
                    />
                    <CreateNewPatientButton
                        onClick={() => setIsPatientFormModalOpen(true)}
                    />
                </div>
            </div>
            <HospitalFormModal isOpen={isHospitalFormModalOpen} />
            <PatientFormModal isOpen={isPatientFormModalOpen} />
        </React.Fragment>
    )
}

export default SideMenu
