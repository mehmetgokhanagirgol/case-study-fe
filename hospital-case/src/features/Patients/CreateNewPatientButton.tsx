import { Button } from '@mui/material'

interface CreateNewPatientButtonProps {
    onClick: () => void
}

const CreateNewPatientButton = ({ onClick }: CreateNewPatientButtonProps) => {
    return (
        <Button variant="contained" onClick={onClick}>
            Create New Patient
        </Button>
    )
}

export default CreateNewPatientButton
