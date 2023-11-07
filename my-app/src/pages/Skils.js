import React, { useState } from 'react'
import { useLoaderData, } from "react-router-dom"
import myImage from './skills.png';
import FormSk from './FormSk';


export default function Skils() {
    const rews = useLoaderData();
    const [isClicked, setisClicked] = useState(false);
    const spanStyle = {
        width: '80%'
    };
    const handeAddSki = () => {
        setisClicked(!isClicked)
    }
    return (
        <>
            <div className="our-skills" id="our-skills">
                <h2 className="main-title">Our Skills</h2>
                <div className="container">
                    <img src={myImage} alt="" />
                    <div className="skills">
                        {rews.map(rew => (

                            <div className="skill">

                                <h3>{rew.skilsName} <span>{rew.degre}</span></h3>
                                <div className="the-progress">
                                    <div className="the-progress">
                                        <span style={{ width: rew.degre }}></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <h2 className="main-title" onClick={handeAddSki}>Add new skills</h2>
            {isClicked && <div className='frameAdd'>
               <FormSk isClicked={isClicked} setisClicked={setisClicked}/>
            </div>}
        </>
    )
}

export const skilsLoader = async () => {
    const rew = await fetch('http://localhost:8000/skils')
    if (!rew.ok) {
        throw Error('Could not found the error !')
    }
    return rew
}
