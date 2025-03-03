import { useSelector } from 'react-redux'
import { selectPatients } from './patientsSlice'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const PatientGrid = () => {
    const patientList = useSelector(selectPatients)
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'surname', headerName: 'Surname', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
        { field: 'age', headerName: 'Age', width: 150 },
        { field: 'turkishCitizenshipId', headerName: 'TCID', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'complaint', headerName: 'Complaint', width: 150 },
    ]
    return <DataGrid rows={patientList} columns={columns} />
}

export default PatientGrid
