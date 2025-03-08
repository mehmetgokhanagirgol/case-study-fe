import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Select, { SingleValue } from 'react-select'
import { addPatient, selectPatientById } from './patientsSlice'
import { Patient } from './patientTypes'
import { selectHospitalList } from '../Hospitals/hospitalsSlice'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { RootState } from '../../app/store'

const PatientFormModal = () => {
    const dispatch = useDispatch()
    const hospitals = useSelector(selectHospitalList)
    const navigate = useNavigate()
    const [selectedHospital, setSelectedHospital] = useState<{
        value: string
        label: string
    }>()
    const { id } = useParams<{ id?: string }>()
    const existingPatient = useSelector((state: RootState) =>
        selectPatientById(state, id)
    )
    const handleChange = (
        newValue: SingleValue<{ value: string; label: string }>
    ) => {
        setSelectedHospital(newValue || undefined)
    }
    const hospitalOptions = hospitals.map((hospital) => {
        return { value: hospital.id, label: hospital.name }
    })

    const handlePatientFormSubmission = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const patientObject: Patient = {
            id: crypto.randomUUID(),
            name: formData.get('name') as string,
            surname: formData.get('surname') as string,
            gender: formData.get('gender') as string,
            age: Number(formData.get('age')),
            turkishCitizenshipId: Number(formData.get('tckn')),
            address: formData.get('address') as string,
            complaint: formData.get('complaint') as string,
            hospitalId: selectedHospital?.value ? selectedHospital.value : '',
        }
        dispatch(addPatient(patientObject))
        navigate('/patient')
    }
    return (
        <div className="formPageContainer">
            <form
                className="formContainer"
                onSubmit={handlePatientFormSubmission}
            >
                <div>
                    <label htmlFor="name">Patient Name:</label>
                    <input
                        name="name"
                        required
                        defaultValue={existingPatient?.name}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Patinent Surname:</label>
                    <input
                        name="surname"
                        required
                        defaultValue={existingPatient?.surname}
                    />
                </div>
                <div>
                    <label>Patient Gender:</label>
                    <div>
                        <input
                            type="radio"
                            style={{ display: 'inline-block', width: '50px' }}
                            name="gender"
                            value="male"
                            required
                        />
                        <label htmlFor="male">Male</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            required
                            style={{ display: 'inline-block', width: '50px' }}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="age">Patient Age:</label>
                    <input
                        name="age"
                        required
                        defaultValue={existingPatient?.age}
                    />
                </div>
                <div>
                    <label htmlFor="tckn">Patient ID Number:</label>
                    <input
                        name="tckn"
                        maxLength={11}
                        pattern="\d{11}"
                        title="TC Kimlik Numarası 11 haneli olmalıdır."
                        required
                        defaultValue={existingPatient?.turkishCitizenshipId}
                    />
                </div>
                <div>
                    <label htmlFor="address">Patient Address:</label>
                    <textarea
                        name="address"
                        required
                        defaultValue={existingPatient?.address}
                    />
                </div>
                <div>
                    <label htmlFor="complaint">Patient Complaint:</label>
                    <textarea
                        name="complaint"
                        required
                        defaultValue={existingPatient?.complaint}
                    />
                </div>
                <div>
                    <label htmlFor="hospital">Hospital</label>
                    <Select
                        name="hospital"
                        options={hospitalOptions}
                        value={selectedHospital}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default PatientFormModal
