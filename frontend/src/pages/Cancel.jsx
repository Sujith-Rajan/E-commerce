import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

const Cancel = () => {
  return (
    <div className='cancel'>
        <h1>Vastra.</h1>
        <CancelIcon  className='icon' />
      <label htmlFor="">Payment Canceled</label>
      <p>Your order is being cancled. Thanks for choosing <span>Vastara</span> App</p>
    </div>
  )
}

export default Cancel
