import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open,handleDelete,handleClose}) {
    const handleClickOpen = () => {
        // setOpen(true);
      };
    
      const handleClickClose = () => {
        handleClose();
      };

  return (
    <React.Fragment>
      <Button onClick={() => handleClickOpen()}>Delete</Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
        Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you confirm to delete the user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={()=>{handleDelete(); handleClickClose();}} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
