//import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { useState } from 'react'
import React from 'react';


export default function FormSk({isClicked,setisClicked}) {
    const [skilsName,setSkilsName]=useState('');
    const [number,setNumber]=useState('');
    const [degre,setDegre]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const skill = {skilsName,degre};
        setisClicked(!isClicked)
        fetch('http://localhost:8000/skils/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(skill)
        }).then(() => {

        })
      }

  return (
   <>
   {isClicked&& <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label for="username">Skill Nam:</label>
                        <input type="text"
                         value={skilsName}
                         onChange={(e) => setSkilsName(e.target.value)} 
                         required/>
                    </div>
                    <div className="input-group">
                        <label for="password">Degree:</label>
                        <input type="text"  
                        value={degre}
                        onChange={(e) => setDegre(e.target.value)} 
                        required/>
                    <button type="submit" className="btn">Login</button>
                    </div>
                    
                    <h1>{skilsName}</h1>
                </form>
 }  
            </>     
  )
}
