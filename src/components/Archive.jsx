import React from 'react';
import { NavLink } from 'react-router-dom';



const Archive = () => {
 
  const style = {
    
    textAlign:"center",
    marginLeft:"10",
    backgroundColor:"green",
    textColor:"black",
    color:"black"
  };

  return (
    <div>
      <div className='card'>
        <h6 style={{textAlign:"center"}}>Archive Issues</h6>
        <div className='row'>
            <div className='col-sm-6'>
             <div className='card'>
               <h6 style={style}>Volume-1-2015</h6>
             </div>
            </div>
            
             <div className='col-sm-6'>
             <div className='card'>
               <button style={style}><a  href='./research paper on replacement of cement.docx'></a></button>
             </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;