import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto" style={{position:"relative"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#"><img style={{width:60,borderRadius:20}} alt="" src="/Img/ijeras-logos.jpeg"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="./Home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./About">About</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Editorial Board
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to="./EditorialBoard">Editorial Board Members</NavLink></li>
                            <li><NavLink className="dropdown-item" to="./NewsUpdates">News & Updates</NavLink></li>
                            
                            <li><NavLink className="dropdown-item" to="./Join">Join Us</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Indexing">Indexing</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Special">Special Issue</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Current">Current Issue</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Archive">Archive Issue</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="./Submit" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Submit Your Paper 
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to="./OnlineSub">Online Submission</NavLink></li>
                            <li><NavLink className="dropdown-item" to="./MenuscriptFee">Manuscript Publication Fees</NavLink></li>
                            
                            <li><NavLink className="dropdown-item" to="./CallForPaper">CALL FOR PAPER</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Upcoming">Upcoming</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="./Download" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Download
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to="#">Author Instructions For Manuscript</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Covering Letter</NavLink></li>
                            
                            <li><NavLink className="dropdown-item" to="#">Join Us</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Reviewr From</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Transfer Of Copyright Agreement</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Manuscript Template</NavLink></li> 
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="./Contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    
                    </div>

                </div>
                </nav>
                </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;