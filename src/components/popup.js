import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


import Slide from '@mui/material/Slide';
import "../App.css"
import { DialogContentText, DialogTitle, Tooltip } from '@mui/material';
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

const AlertDialogSlide = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>


    <MouseParallaxContainer
      className="parallax"

      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia"
      >
        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >

          <img alt='y' src={logo2} width="100%" onClick={handleClickOpen} className="btn1" />
          {/* <img alt='o'  src={logo3}   onClick={handleClickOpen} className="bl2"/> */}

        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}
      overlayStyle={{ backgroundColor: 'transparent' }}
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

    <MouseParallaxContainer
      className="parallax2"

      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >
      <MouseParallaxChild
        className="dia2"
      >

        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo5} width="110%" onClick={handleClickOpen} className="bl2" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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
    <MouseParallaxContainer
      className="parallax3"

      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia3"
      >

        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo6} onClick={handleClickOpen} className="bl3" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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
    <MouseParallaxContainer
      className="parallax4"

      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia4"
      >

        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >

          <img alt='o' src={logo3} width="100%" onClick={handleClickOpen} className="bl4" />

        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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

    <MouseParallaxContainer
      className="parallax5"

      globalFactorX={0.4}
      globalFactorY={0.4}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia5"
      >
        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo4} width="100%" onClick={handleClickOpen} className="bl5" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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

    <MouseParallaxContainer
      className="parallax6"

      globalFactorX={0.4}
      globalFactorY={0.4}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia6"
      >
        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo8} onClick={handleClickOpen} className="bl6" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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

    <MouseParallaxContainer
      className="parallax7"

      globalFactorX={0.4}
      globalFactorY={0.4}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia7"
      >
        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo7} onClick={handleClickOpen} className="bl7" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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

    <MouseParallaxContainer
      className="parallax8"

      globalFactorX={0.4}
      globalFactorY={0.4}
      resetOnLeave
    >

      <MouseParallaxChild
        className="dia8"
      >
        <Tooltip title={<span>Enter Details About this building.
          <span><br /></span>
          1.
          <span><br /></span>
          2.
          <span><br /></span>
          3.
        </span>
        }
          enterDelay={600}  >
          <img alt='y' src={logo9} onClick={handleClickOpen} className="bl8" />


        </Tooltip>
      </MouseParallaxChild>
    </MouseParallaxContainer>
    <Dialog
      sx={{ width: "500px", height: "500px", marginLeft: "30rem" }}

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


  </>
  );
}
export default AlertDialogSlide;