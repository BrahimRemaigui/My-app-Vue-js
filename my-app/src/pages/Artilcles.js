import React, { useEffect, useState } from 'react'
import { useLoaderData, } from "react-router-dom"
import image1 from '../imgs/cat-06.jpg'
import useFet from './useFet'
import useFetch from './useFetch';
export default function Artilcles() {
 // const {data:response,isPending,error}=useFetch('http://localhost:8000/articles');
 const response = useLoaderData();
  return (
    <>
    <div className="articles" id="articles">
      <h2 className="main-title">Articles</h2>
      <div className="container">
       {
       response.map((rew) => (
        <div className="box">
          
           <img decoding="async" src={'rew.img'} alt="" />
          <div className="content">
            <h3>{rew.title}</h3>
            <h2>{rew.img}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div className="info">
            <a href="">Read More</a>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export const articleLoader = async () => {
  const rew = await fetch('http://localhost:8000/articles/')
  if (!rew.ok) {
      throw Error('Could not found the error !')
  }
  return rew
}