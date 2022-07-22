import React from 'react';
import { NavLink } from 'react-router-dom';
// import jsPDF from "jspdf";

 import logo1 from "./Research Paper.docx";
 import logo2 from './research paper on replacement of cement.docx';
 import logo from "./FCR.pdf";
 import logo3 from "./SOUND CLASSIFICATION SYSTEM USING MACHINE LEARNING TECHNIQUES.pdf";
import logo4 from "./conference_101719.pdf"
const Special = () => {
//   const PdfGenerate = ()=>{
//        let doc =  new jsPDF("landscape","px","a4","false");
//        doc.addPage(logo,"pdf",)
//        doc.save("FCR.docx");
//   }    
//   const PdfGenerate1 = ()=>{
//     let doc =  new jsPDF("landscape");
//     doc.addPage(logo1,"pdf")
//     doc.save("Research.docx");
// }   
// const PdfGenerate2 = ()=>{
//   let doc =  new jsPDF("landscape");
//   doc.addPage(logo2,"pdf")
//   doc.save("Research.docx");
// }    
// const PdfGenerate3 = ()=>{
//   let doc =  new jsPDF("landscape");
//   doc.addPage(logo3,"pdf")
//   doc.save("Research.docx");
// } 
// const PdfGenerate4 = ()=>{
//   let doc =  new jsPDF("landscape");
//   doc.addPage(logo4,"pdf")
//   doc.save("Research.docx");
// }     
  return (
    <div>
    <h6 style={{ textAlign:'center'}}>Special Issues</h6>
    <table>
        <tr>
          <th>S.No.</th>
          <th>Title of Manuscript</th>
          <th>Page No</th>
          <th>Download/ PDF</th>
        </tr>
        <tr>
          <td>1</td>
          <td><b>An Improved Inventory Model for Decaying Items 
with Quadratic Demand and Trade Credits</b>

           <br/>  Author: <b>1Pushpendra Kumar, 2Purvi J Naik, 3A. K. Malik</b></td>
          <td>16-25</td>
          <td>
          <a href={logo} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td><b>I0T Based Home Security System Using Raspberry</b>

           <br/>Author: <b>1Abdul Raheem ,2Abhishek Kumar</b></td>
          <td>08-15</td>
          <td>  <a href={logo1} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td><b>SOUND CLASSIFICATION SYSTEM USINGMACHINE LEARNING TECHNIQUES</b>

           <br/>Author: <b>1Rachit Srivastava ,2Gourav Sharma, 3Rahul Kumar Sharma, 4Nikhil Yadav</b></td>
          <td>08-15</td>
          <td> <a href={logo3} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td><b>Assessment Of Partial Replacement Of Cement With Sugarcane Bagasse Ash As Replacement Material.</b>

           <br/>Author: <b>1Mohd Wajid  ,2Dheeraj Agarwal</b></td>
          <td>08-15</td>
          <td>   <a href={logo2} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td><b>Smart Presentation System using Hand Gesture</b>

           <br/>Author: <b>1Amrendra Shekhar ,2Divyanshu Mishra, 3Priyanshu Mishr, 4Harsh Jha</b></td>
          <td>08-15</td>
          <td>   <a href={logo4} target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a></td>
        </tr>
        
     
        
      </table>
  </div>
  )
};

export default Special;