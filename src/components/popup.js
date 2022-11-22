import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import "../App.css"
import { Tooltip } from '@mui/material';
import logo3 from "../assets/largemarket.png";
import logo2 from "../assets/waracc.png";
import logo4 from "../assets/farms.png";
import logo5 from "../assets/militaryb.png";
import logo6 from "../assets/Montsery.png";
import logo7 from "../assets/Castle.png";
import logo8 from "../assets/fish.png";
import logo9 from "../assets/reserch.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide=( )=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>


  
    <div className='dia'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo2}   onClick={handleClickOpen} className="btn1"/>
        {/* <img alt='o'  src={logo3}   onClick={handleClickOpen} className="bl2"/> */}
     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
    </div>
    <div className='dia2'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo5}   onClick={handleClickOpen} className="bl2"/>

     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
  </div>
  <div className='dia3'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo6}   onClick={handleClickOpen} className="bl3"/>

     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
  </div>
  <div className='dia4'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
     
        <img alt='o'  src={logo3}   onClick={handleClickOpen} className="bl4"/>
     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
   </div>
    <div className='dia5'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo4}   onClick={handleClickOpen} className="bl5"/>
    
     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
  </div>
    <div className='dia6'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo8}   onClick={handleClickOpen} className="bl6"/>
    
     
      </Tooltip>
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
  </div>
  <div className='dia7'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo7}   onClick={handleClickOpen} className="bl7"/>
    
     
      </Tooltip>
      
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
   </div>
  <div className='dia8'>
        <Tooltip title={<span>Enter Details About this building.
            <span><br/></span>
         1.
         <span><br/></span>
        2.
        <span><br/></span>
        3.
        </span>
  }
      enterDelay={600}  >
        <img alt='y'  src={logo9}   onClick={handleClickOpen} className="bl8"/>
    
     
      </Tooltip>
      
      <Dialog
      sx={{width:"500px",height:"500px",marginLeft:"30rem"}}
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Heading"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
      body
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>

        </DialogActions>
      </Dialog>
   </div>
   
   </>
  );
}
export default  AlertDialogSlide;