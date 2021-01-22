import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Redirect} from 'react-router-dom';

export const MyErrorModal= (props) => {
  const [open,setOpen]=React.useState(true);
  
  const closeModal = function closeModal(){
    console.log("close modal");
    props.redirect && props.redirect();
    
    setOpen(false);
  }

  const cancelModal = function cancelModal(){
    props.cancelRedirectNew && props.cancelRedirectNew();
    setOpen(false);
      
  }

  


  
  return(
    <Dialog
    open={open}
    onClose={closeModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
   <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>   
  
<DialogContent>
    <DialogContentText id="alert-dialog-description">
        <div className="ui sub header container centered"> {props.content}</div> 
    </DialogContentText>
</DialogContent>
   
   <DialogActions>
  {props.cancelActionText && 
  <Button onClick={cancelModal}
             color="primary"
            //   content={props.cancelActionText}
            >
            {props.cancelActionText}
            </Button>
            }
           {props.positiveActionText && 
           <Button onClick={closeModal}
              color="secondary"
            //   content={props.positiveActionText}
            >
                {props.positiveActionText}
                </Button>
            }
    </DialogActions>
    </Dialog>  
  );
}
