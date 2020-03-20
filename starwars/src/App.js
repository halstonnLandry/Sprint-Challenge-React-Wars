import React,{useState,useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import Obj from './components/Obj.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const H1= styled.h1`
font-size:100px;
color:#ffff00;
background-color:#00000090;
box-shadow: 0 0 25px #ffff00;
border-radius: 20px;
margin: 20px;
`
const Left=styled.section`
width:50%;
box-shadow:inset 0 0 50px #000000;
height:100%;
`
const Right=styled.section`
width:50%;
height:100%;
box-shadow:inset 0 0 50px #000000
`
  return (

    <div className="App">
      <H1 className="Header">React Wars</H1>
<div className='columns'>
  <Obj/>
</div>

    </div>
  );
}

export default App;
