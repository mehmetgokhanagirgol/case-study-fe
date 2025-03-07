import { Button } from "@mui/material"

interface CreateNewHospitalButtonProps {
    onClick: () => void,
}

const CreateNewHospitalButton = ({onClick}: CreateNewHospitalButtonProps) => {
    return <Button variant="contained" onClick={onClick}>Create New Hospital</Button>
}

export default CreateNewHospitalButton