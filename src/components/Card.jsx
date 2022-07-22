import React from 'react';
import { NavLink } from 'react-router-dom';
import "./card.css";

const Card = () => {
    
  return (
    <div className='row'>
        <div className='col-sm-4'>
            <div className='card' style={{borderWidth:1}} >
                <h6 style={{textAlign:"center"}}>IJERGS Menu</h6>
                <ul>
                    <li><NavLink to="#">Call For Paper</NavLink></li>
                    <li><NavLink to="./Publication">Publication Charge</NavLink></li>
                    <li><NavLink to="#">Indexing</NavLink></li>
                    <li><NavLink to="#">Author Guideline</NavLink></li>
                    <li><NavLink to="#">Copyright Claims</NavLink></li>
                    <li><NavLink to="#">Mode of payment</NavLink></li>
                </ul>
                </div>
            </div>
        <div className='col-sm-4'>
            <div className='card'>
                <h6 style={{textAlign:"center"}} >Latest Issues</h6>
                <ul>
                    <li><NavLink to="#">Call For Conference</NavLink></li>
                    <li><NavLink to="#">Upcoming Conference</NavLink></li>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                </ul>
                </div>
            </div>
        <div className='col-sm-4'>
            <div className='card' > 
           
              <h6 style={{textAlign:"center"}}>Our Policies</h6>
              <ul>
                  <li><NavLink to="#">Article Correction Policy</NavLink></li>
                  <li><NavLink to="#">Advertise with Us</NavLink></li>
                  <li><NavLink to="#">Publication Ethics Policy</NavLink></li>
                  <li><NavLink to="#">Journal Paper Prints</NavLink></li>
                  <li><NavLink to="#">Privacy Policy</NavLink></li>
                  <br></br>
              </ul>
              </div>
        </div>
        <div className='col-sm-4'>
            <div className='card' > 
            <h6 style={{textAlign:"center"}}>Subject Category</h6>
            <div className='divcon'>

            <marquee width="60%" direction="up" height="150px">
              
              <ul>
                  <li><NavLink to="#">Engineering & Technology</NavLink></li>
               <li><NavLink to="#"> Computer Science & Engineering</NavLink></li>
               <li><NavLink to="#">Electronics Engineering</NavLink></li> 
               <li><NavLink to="#"> Electrical Engineering</NavLink></li> 
               <li><NavLink to="#"> Civil Engineering</NavLink></li> 
               <li><NavLink to="#"> Automobile Engineering</NavLink></li> 
               <li><NavLink to="#"> Mechanical Engineering</NavLink></li> 
               <li><NavLink to="#">  Information Technology</NavLink></li> 
               <li><NavLink to="#"> Architecture design, Architecture Computing</NavLink></li> 
               <li><NavLink to="#"> Design Development</NavLink></li> 
               <li><NavLink to="#"> Interior Design</NavLink></li> 
               <li><NavLink to="#"> Applied Sciences</NavLink></li> 
               <li><NavLink to="#"> Mathematics, Chemistry, Physics</NavLink></li> 
               <li><NavLink to="#"> Botany, Zoology</NavLink></li> 
               <li><NavLink to="#"> Agriculture Horticulture</NavLink></li> 
               <li><NavLink to="#"> Plant Breeding & Genetics</NavLink></li> 
               <li><NavLink to="#"> Entomology, Agronomy</NavLink></li> 
               <li><NavLink to="#"> Microbiology, Nanotechnology</NavLink></li> 
               <li><NavLink to="#"> Food and Biotechnology</NavLink></li> 
               <li><NavLink to="#">Medical Science</NavLink></li> 
               <li><NavLink to="#">  Nursing Science</NavLink></li> 
               <li><NavLink to="#">    Pharmacy Science</NavLink></li> 
               <li><NavLink to="#">   Ayurvedic Science</NavLink></li> 
               <li><NavLink to="#">   Homeopathic Science</NavLink></li> 
               <li><NavLink to="#">   Physiotherapy Science</NavLink></li> 

              </ul>
              </marquee>
              </div>
            </div>
            
        </div>
        <div className='col-sm-4'>
            <div className='card' > 
            <h6 style={{textAlign:"center"}}>News</h6>
            <div className='divcon'>
             
            <marquee width="60%" direction="up" height="150px">
              <ul>
                  <li><NavLink to="./IJERAS">IJERGS Certified By: <br/>International Accreditation and Research Council, New York, NY, 10005, United State America (USA)</NavLink></li>
                  <li><NavLink to="./NewsDescription">You Enjoy Higher Citation Open Access Very low fees Rapid Decision Rapid Experts And Thorough Peer Review Open Review</NavLink></li>
                  <li><NavLink to="./SubmitArtical">Submit Your Article/Research Paper/ManuScript</NavLink></li>
                 
              </ul>
              </marquee>  
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card;