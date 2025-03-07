import {
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
} from '@mui/material'

interface HospitalFormModalProps {
    isOpen: boolean
}

const hospitalCategories = [
    'Diş Hastanesi',
    'Göz Hastanesi',
    'Genel Hastane',
    'Diğer',
]

const HospitalFormModal = ({ isOpen }: HospitalFormModalProps) => {
    return (
        <Modal open={isOpen}>
            <div className="modalContainer">
                <h1>Create New Hospital</h1>
                <form className="formContainer">
                    <TextField />
                    <TextField />
                    <FormControl>
                        <InputLabel>Category</InputLabel>
                        <Select>
                            {hospitalCategories.map((hospitalCategory) => (
                                <MenuItem
                                    value={hospitalCategory}
                                    key={hospitalCategory}
                                >
                                    {hospitalCategory}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </div>
        </Modal>
    )
}

export default HospitalFormModal
