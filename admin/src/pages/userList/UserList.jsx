import './userList.css'
import {DataGrid} from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'

import { userRows } from '../../dummyData'
import { useNavigate } from 'react-router-dom'
import React,{ useState } from 'react'
import AlertDialogue from '../modals.jsx'


const UserList = () => {
   
    const [data,setData] = useState(userRows)
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const navigate = useNavigate()

    const redirectToEdit = (userId) => {
        navigate(`/user/${userId}`)
    }

    const handleDelete = () => {
        if (selectedUserId !== null) {
          setData((prevData) => prevData.filter((item) => item.id !== selectedUserId));
          setConfirmationOpen(false);
        }
      };
    
      const handleOpen = () => {
        setConfirmationOpen(true);
      };
    
      const handleClose = () => {
        setConfirmationOpen(false);
      };
    

    const columns = [
        {field : 'id',headerName: 'ID',width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return(
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                  
                    </div>
                )
            }

        },
        {field: "email",headerName:"Email",width: 200},
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    
                        <button className='userListEdit' onClick={()=> redirectToEdit(params.row.id)}>Edit</button>
                   
              
                    <DeleteOutline className='userListDelete'
                    onClick={()=> {
                        setSelectedUserId(params.row.id);
                        handleOpen();
                      }}/>
                    {isConfirmationOpen && (
              <AlertDialogue
                open={isConfirmationOpen}
                handleClose={handleClose}
                handleDelete={handleDelete}
              />
            )}
                     </>
                )
            }
        }

    ]

  return (
    <div className='userList'>
      <DataGrid
      rows={data}
      disableRowSelectionOnClick
      columns={columns}
      pageSizeOptions={8}
      checkboxSelection
      />
    </div>
  )
}

export default UserList
