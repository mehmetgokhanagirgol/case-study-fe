import { Button } from '@mui/material'

interface CreateNewPatientButtonProps {
    onClick: () => void
}

const CreateNewPatientButton = ({ onClick }: CreateNewPatientButtonProps) => {
    return (
        <Button variant="contained" className="m-3" onClick={onClick}>
            Create New Patient
        </Button>
    )
}

export default CreateNewPatientButton
