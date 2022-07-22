import React from 'react';
import Hadder from './Hadder';
import Card from './Card';

import Documents from './Documents';

import Index from './Index';
import Slider from './Slider';

const Home = () => {
  return (
    <>
    <div>
      <Hadder></Hadder>
    </div>
    <div style={{marginTop:10,marginBottom:10}}>
      <Slider/>
      
    </div>
    <div style={{marginTop:10,marginBottom:10}}>
      <Documents></Documents>
    </div>
    <div style={{marginTop:10,marginBottom:10}}>
      <Card></Card>
    </div>
    <div style={{marginTop:10,marginBottom:10}}>
      <Index></Index>
    </div>   

   
      </>
  )
}

export default Home;