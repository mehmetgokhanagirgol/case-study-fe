import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { selectPatientById } from './patientsSlice'

const PatientDetails = () => {
    const { id } = useParams<{ id?: string }>()
    const existingPatient = useSelector((state: RootState) =>
        selectPatientById(state, id || '')
    )

    return (
        <div className="d-flex flex-column w-100 m-5">
            <h2 className="mb-3">Patient Details</h2>
            <div className="d-flex">
                <label>Patient Name:</label>
                <p>
                    {existingPatient?.name} {existingPatient?.surname}
                </p>
            </div>
            <div className="d-flex">
                <label>Gender:</label>
                <p>{existingPatient?.gender}</p>
            </div>
            <div className="d-flex">
                <label>Age:</label>
                <p>{existingPatient?.age}</p>
            </div>
            <div className="d-flex">
                <label>Turkish Citizenship ID:</label>
                <p>{existingPatient?.turkishCitizenshipId}</p>
            </div>
            <div className="d-flex">
                <label>Patient Address:</label>
                <p>{existingPatient?.address}</p>
            </div>
            <div className="d-flex">
                <label>Complaint:</label>
                <p>{existingPatient?.complaint}</p>
            </div>
        </div>
    )
}

export default PatientDetails
