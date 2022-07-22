import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Route,Switch,Redirect } from "react-router-dom";
import About from "./components/About";
import Archive from "./components/Archive";
import Contact from "./components/Contact";
import Current from "./components/Current";
import Download from "./components/Download";
import EditorialBoard from "./components/EditorialBoard";
import Home from "./components/Home";
import Indexing from "./components/Indexing";
import Navbar from "./components/Navbar";
import Special from "./components/Special";
import Submit from "./components/Submit";
import Upcoming from "./components/Upcoming";
import NewsLatter from "./components/NewsLatter";
// import Contact1 from "./components/Contact1";
import Footer from "./components/Footer";
import NewsUpdates from "./components/NewsUpdates";
import Publication from "./components/Publication";
import NewsDescription from "./components/NewsDescription";
import SubmitArtical from "./components/SubmitArtical";
import IJERAS from "./components/IJERAS";
import CallForPaper from "./components/CallForPaper";
import OnlineSub from "./components/OnlineSub";
import MenuscriptFee from "./components/MenuscriptFee";
//import MenuscriptFee from "./components/MenuscriptFee";
import Join from "./components/Join";

 
const App = ()=>{
    return(
      <>
      {/* <Contact1></Contact1> */}
       <NewsLatter></NewsLatter>
       <div>
       <Navbar></Navbar>
       </div>
      
      <Switch>
            <Route exact path="/" component ={Home}/>
            <Route exact path="/About" component ={About}/>
            <Route exact path="/EditorialBoard" component ={EditorialBoard}/>
            <Route exact path="/NewsUpdates" component ={NewsUpdates}/>
            <Route exact path="/Indexing" component ={Indexing}/>
            <Route exact path="/Special" component ={Current}/>
            <Route exact path="/SOUND CLASSIFICATION SYSTEM USING MACHINE LEARNING TECHNIQUES.pdf" component ={Current}/>
            <Route exact path="/" component ={Current}/>
            <Route exact path="/Current" component={Special}/>
            <Route exact path="/SOUND CLASSIFICATION SYSTEM USING MACHINE LEARNING TECHNIQUES.pdf" component={Special}/>
            <Route exact path="/Archive" component={Archive}/>
            <Route exact path="/Submit" component={Submit}/>
            <Route exact path="/Upcoming" component={Upcoming}/>
            <Route exact path="/Download" component={Download}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Publication" component={Publication}/>
            <Route exact path="/NewsDescription" component={NewsDescription}/>
            <Route exact path="/SubmitArtical" component={SubmitArtical}/>
            <Route exact path="/IJERAS" component={IJERAS}/>
            <Route exact path="/CallForPaper" component={CallForPaper}/>
            <Route exact path="/OnlineSub" component={OnlineSub}/>
            <Route exact path="/MenuscriptFee" component={MenuscriptFee}/>
            <Route exact path="/Join" component={Join}/>
            <Redirect to="/"/>
      </Switch>
       <div style={{backgroundColor:"#dee4e7"}}>
      <Footer/>
       </div> 
      </>
    )
};

export default App;