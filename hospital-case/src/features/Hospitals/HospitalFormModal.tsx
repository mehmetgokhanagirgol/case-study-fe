import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Select, { SingleValue } from 'react-select'
import { Hospital } from './hospitalTypes'
import { useState } from 'react'
import {
    addHospital,
    selectHospitalById,
    updateHospital,
} from './hospitalsSlice'
import { useNavigate, useParams } from 'react-router'
import { RootState } from '../../app/store'

const hospitalCategories = [
    { value: 'Diş Hastanesi', label: 'Diş Hastanesi' },
    { value: 'Göz Hastanesi', label: 'Göz Hastanesi' },
    { value: 'Genel Hastane', label: 'Genel Hastane' },
    { value: 'Diğer', label: 'Diğer' },
]

const HospitalFormModal = () => {
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState<{
        value: string
        label: string
    }>()
    const navigate = useNavigate()
    const { id } = useParams<{ id?: string }>()
    const existingHospital = useSelector((state: RootState) =>
        selectHospitalById(state, id)
    )

    const handleChange = (
        newValue: SingleValue<{ value: string; label: string }>
    ) => {
        setSelectedCategory(newValue || undefined)
    }

    const handleHospitalSubmission = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const hospitalObject: Hospital = {
            id: existingHospital ? existingHospital.id : crypto.randomUUID(),
            name: formData.get('hospitalName') as string,
            address: formData.get('hospitalAddress') as string,
            category: selectedCategory ? selectedCategory.value : '',
        }
        if (existingHospital) {
            dispatch(updateHospital(hospitalObject))
        } else {
            dispatch(addHospital(hospitalObject))
        }
        navigate('/hospital')
    }

    return (
        <div className="formPageContainer">
            <form className="formContainer" onSubmit={handleHospitalSubmission}>
                <div>
                    <label htmlFor="hospitalName">Hospital Name:</label>
                    <input
                        name="hospitalName"
                        required
                        defaultValue={existingHospital?.name}
                    />
                </div>
                <div>
                    <label htmlFor="hospitalAddress">Hospital Address:</label>
                    <input
                        name="hospitalAddress"
                        required
                        defaultValue={existingHospital?.address}
                    />
                </div>
                <div>
                    <label htmlFor="hospitalCategory">Category:</label>
                    <Select
                        name="hospitalCategory"
                        value={selectedCategory}
                        onChange={handleChange}
                        options={hospitalCategories}
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

export default HospitalFormModal
