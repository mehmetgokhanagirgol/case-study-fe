import { useSelector } from 'react-redux'
import { selectHospitalList } from './hospitalsSlice'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const HospitalGrid = () => {
    const hospitalList = useSelector(selectHospitalList)
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'category', headerName: 'Category', width: 150 },
    ]
    return <DataGrid rows={hospitalList} columns={columns} />
}

export default HospitalGrid
