import React from 'react'
import { NavLink } from 'react-router-dom';

const SubmitArtical = () => {
  return (
    <div>
        <h6>News Description</h6>
        <div className='card'>
            <h6>Submit Your Article/Research Paper/ManuScript</h6>
            <p>All submissions should be made electronically to the editor through online submission process or author may directly submit the manuscript to: editor@ijergs.in with mentioning journal title in their respective subject line.

            
        <br/>More information of the journals and the publishing process can be obtained at: <NavLink to = "">www.ijeras.in</NavLink></p>
         <p><strong>Submit your Articles Now</strong></p>
         <p>Authors are invited to send their research paper through online submission process at www.albertscience.com. All the submitted papers will be reviewed as per full double blind international refereeing process.

The Research papers should be drafted in IJERGS Model paper submission format and sent at: editor@ijergs.in or editorijergs.in@gmail.com 

*Article should be submitted through any one of the mode- email or online submission system.</p>
        </div>
    </div>
  )
};

export default SubmitArtical;