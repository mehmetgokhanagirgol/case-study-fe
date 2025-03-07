import { MenuItem, Modal, Select, TextField } from '@mui/material'

interface PatientFormModalProps {
    isOpen: boolean
}

const PatientFormModal = ({ isOpen }: PatientFormModalProps) => {
    return (
        <Modal open={isOpen}>
            <div className="modalContainer">
                <h1>Create New Patient</h1>
                <form className="formContainer">
                    <TextField />
                    <TextField />
                    <Select>
                        <MenuItem></MenuItem>
                    </Select>
                </form>
            </div>
        </Modal>
    )
}

export default PatientFormModal
