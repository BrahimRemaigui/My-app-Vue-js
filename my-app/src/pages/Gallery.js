import React from 'react'
import img1 from '../imgs/gallery-01.png'
import img2 from '../imgs/gallery-02.png'
import img3 from '../imgs/gallery-03.jpg'
import img4 from '../imgs/gallery-04.png'
import img5 from '../imgs/gallery-05.jpg'
import img6 from '../imgs/gallery-06.png'

export default function Gallery() {
  return (
    <div>
       <div class="gallery" id="gallery"> 
      <h2 class="main-title">Gallery</h2>
      <div class="container">
        <div class="box">
          <div class="image">
            <img decoding="async" src={img1} alt="" />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img decoding="async" src={img2} alt="" />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img decoding="async" src={img3} alt="" />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img decoding="async" src={img4} alt="" />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img decoding="async" src={img5} alt="" />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img decoding="async" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
