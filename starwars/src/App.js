import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
    const [data, setData]= useState ([]);
   useEffect(()=>{
    axios.get("https://swapi.co/api/people")
    .then(response=>{
      setData(response.data);
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    });
   },[])
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
  return (

    <div className="App">
      <H1 className="Header">React Wars</H1>
    </div>
  );
}

export default App;
