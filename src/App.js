
import './App.css';
import logo from "./assets/Gold.png"
import logo1 from "./assets/coper.png"
import Navbar from './components/navbar';
import SimpleDialogDemo from './components/popup';

const  App=()=> {
  return (<>
   
    <div className="App">
   
      <img  src={logo1}  alt='map'   className='img2' />
        
      <img  src={logo}  alt='map'   className='img1' />
       
</div>
<div className='l1'>   <SimpleDialogDemo     />              </div>


    

</>














  );
}

export default App;
