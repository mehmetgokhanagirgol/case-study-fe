import { useDispatch, useSelector } from 'react-redux'
import { removeHospital, selectHospitalList } from './hospitalsSlice'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import PeopleIcon from '@mui/icons-material/People'

import { useNavigate } from 'react-router'

const HospitalGrid = () => {
    const hospitalList = useSelector(selectHospitalList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleView = (id: string) => {
        navigate(`/hospital/view/${id}`)
    }

    const handleEdit = (id: string) => {
        navigate(`/hospital/form/${id}`)
    }

    const handleDelete = (id: string) => {
        dispatch(removeHospital(id))
    }

    const handlePatientView = (id: string) => {
        navigate(`/patient/${id}`)
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'category', headerName: 'Category', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 250,
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
                    <IconButton
                        onClick={() => handlePatientView(params.row.id)}
                        color="primary"
                    >
                        <PeopleIcon />
                    </IconButton>
                </>
            ),
        },
    ]

    return <DataGrid rows={hospitalList} columns={columns} />
}

export default HospitalGrid
