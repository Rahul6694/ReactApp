import React from 'react';

import "./Current.css";

//import { Link, NavLink } from 'react-router-dom';
//import jsPDF from "jspdf";

// import "/Img/16486501114415.pdf";

import logo2 from './research paper on replacement of cement.docx';

import logo3 from "./SOUND CLASSIFICATION SYSTEM USING MACHINE LEARNING TECHNIQUES.pdf";

const Current = () => {

  return (
    <div>
      <h6>Articles:</h6>
    
      <table>
          <tr>
            <th>S.No.</th>
            <th>Title of Manuscript</th>
            <th>Page No</th>
            <th>Download / PDF</th>
          </tr>
          <tr>
            <td>1</td>
            <td><b>Assessment Of Partial Replacement Of Cement With Sugarcane Bagasse Ash As Replacement Material.</b>

             <br/>  Author: <b>1Mohd Wajid  ,2Dheeraj Agarwal</b></td>
            <td>16-25</td>
            <td>
            <a href={logo2} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td><b>SOUND CLASSIFICATION SYSTEM USINGMACHINE LEARNING TECHNIQUES</b>

             <br/>Author: <b>1Rachit Srivastava ,2Gourav Sharma, 3Rahul Kumar Sharma, 4Nikhil Yadav</b></td>
             
            <td>08-15</td>
            <td>
            <a href={logo3} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a></td>
          </tr>
          </table>
    </div>
  )
}

export default Current;