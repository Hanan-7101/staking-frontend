
import './App.css';
import logo from "./assets/Gold.png"
import logo1 from "./assets/coper.png"
import Navbar from './components/navbar';
import SimpleDialogDemo from './components/popup';
import { Box, Fab } from '@mui/material';
import { useState } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import { TroubleshootTwoTone } from '@mui/icons-material';
const  App=()=> {
  const [open,setOpen]=useState(TroubleshootTwoTone)
  return (<>
   
    <div className="App">
      <div className='water'> 
      <svg>
  <filter id="turbulence" x="0" y="0" width="100%" height="100%">
    <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
    <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
  </filter>
  <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
</svg>

  
 
     
      
</div>
<div className='main'>  <img  src={logo1}  alt='map'   className='img2' />
        
        <img  src={logo}  alt='map'   className='img1' /></div>
     
      </div>
      <div className='assets-main'>
        <SimpleDialogDemo     /> 
        </div> 

   
             <div  className='nav123'>
              {/* <Box>
             <Fab variant="extended" size="small" color="primary" aria-label="add" onClick={()=>setOpen(!open)} >
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
            </Box>
               


            {
              open ? ( <Navbar/>):(null)
            } */}

            
             </div>


    

</>














  );
}

export default App;
