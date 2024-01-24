import './productList.css'
import {DataGrid} from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import React,{ useEffect, useState } from 'react'
import AlertDialogue from '../modals.jsx'
import { useSelector } from 'react-redux/es/hooks/useSelector.js'
import { useDispatch } from 'react-redux'
import { getProducts,deleteProducts } from '../../redux/apiCall.js'




const ProductList = () => {
  const {products} = useSelector((state)=> state.product)
  console.log(products)
  const dispatch = useDispatch() 
  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])
 
  
    const [selectedProductId, selectedSetProductId] = useState(null);
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const navigate = useNavigate()

    const redirectToEdit = (prdctId) => {
        navigate(`/product/${prdctId}`)
    }

    const handleDelete = () => {
        if (selectedProductId !== null) {
         deleteProducts(dispatch,selectedProductId)
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
        {field : '_id',headerName: 'ID',width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return(
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.image} alt="" />
                        {params.row.title}
                  
                    </div>
                )
            }

        },
        {field: "inStock",headerName:"Stock",width: 200},
       
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    
                        <button className='productListEdit' onClick={()=> redirectToEdit(params.row._id)}>Edit</button>
                   
              
                    <DeleteOutline className='productListDelete'
                    onClick={()=> {
                     selectedSetProductId(params.row._id);
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
    <div className='productList'>
      <DataGrid
      rows={products}
      disableRowSelectionOnClick
      columns={columns}
      getRowId={(row) => row._id}
      pageSizeOptions={8}
      checkboxSelection
      />
    </div>
  )
}

export default ProductList
