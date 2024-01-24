import React from 'react'
import { CheckCircle} from "@mui/icons-material";
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation()

  const cart = location.state.cart
  console.log(location)
  
  console.log(cart)
  return (
    <div className='success'>
        <h1>Vastra.</h1>
        <CheckCircle className='icon' />
      <label htmlFor="">Payment Successfull</label>
      <p>Your order is being prepared. Thanks for choosing <span>Vastara</span> App</p>
    </div>
  )
}

export default Success
