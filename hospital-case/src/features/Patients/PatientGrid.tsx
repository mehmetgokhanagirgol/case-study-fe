import { useDispatch, useSelector } from 'react-redux'
import { removePatient, selectPatients } from './patientsSlice'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate, useParams } from 'react-router'

const PatientGrid = () => {
    const patientList = useSelector(selectPatients)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { hospitalId } = useParams<string>()
    const filteredPatientList = hospitalId
        ? patientList.filter((patient) => patient.hospitalId === hospitalId)
        : patientList

    const handleView = (id: string) => {
        navigate(`/patient/view/${id}`)
    }

    const handleEdit = (id: string) => {
        navigate(`/patient/form/${id}`)
    }

    const handleDelete = (id: string) => {
        dispatch(removePatient(id))
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'surname', headerName: 'Surname', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
        { field: 'age', headerName: 'Age', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <IconButton
                        onClick={() => handleView(params.row.id)}
                        color="primary"
                    >
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => handleEdit(params.row.id)}
                        color="secondary"
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => handleDelete(params.row.id)}
                        color="error"
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ]
    return <DataGrid rows={filteredPatientList} columns={columns} />
}

export default PatientGrid
