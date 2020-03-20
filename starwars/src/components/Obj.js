import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Obj = (props) => 
{
    const [data, setData]= useState ([]);
   useEffect(()=>{
    axios.get("https://swapi.co/api/people")
    .then(response=>{
      setData(response.data.results);
      console.log(response.data.results);
    })
    .catch(error=>{
      console.log(error);
    });
   },[])
return(
<div className='object'>
    <div>
    {data.map(item=>{
        return <>
        <section className='left'>
        <h2 className='name'>
                {item.name}
            </h2>
            <div>
                <span>
                    Height:{item.height}
                </span>
                <span>
                    _
                </span>
                <span>
                    Mass:{item.mass}
                </span>
            </div>
            <div>
                <span>
                    Hair Color:{item.hair_color}
                </span>
                <span>
                    _
                </span>
                <span>
                    Eye Color:{item.eye_color}
                </span>
            </div>
            <div>
                <span>
                    Gender:{item.gender}
                </span>
                <span>
                    _
                </span>
                <span>
                    Skin Color:{item.skin_color}
                </span>
            </div>
            </section>
            </>
    })}
    </div>
    <div className='names'>
    {data.map(item=>{
        return<button className='name'>{
            item.name
            }</button>
    })}
    </div>
    
    </div>
)
};
export default Obj;