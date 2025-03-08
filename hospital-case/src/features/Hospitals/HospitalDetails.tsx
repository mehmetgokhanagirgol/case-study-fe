import { useParams } from 'react-router'
import { selectHospitalById } from './hospitalsSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const HospitalDetails = () => {
    const { id } = useParams<{ id?: string }>()
    const existingHospital = useSelector((state: RootState) =>
        selectHospitalById(state, id)
    )

    return (
        <div className="d-flex flex-column w-100 m-5">
            <h2 className="mb-3">Hospital Details</h2>
            <div className="d-flex">
                <label>Hospital Name:</label>
                <p>{existingHospital?.name}</p>
            </div>
            <div className="d-flex">
                <label>Hospital Address:</label>
                <p>{existingHospital?.address}</p>
            </div>
            <div className="d-flex">
                <label>Hospital Category:</label>
                <p>{existingHospital?.category}</p>
            </div>
        </div>
    )
}

export default HospitalDetails
