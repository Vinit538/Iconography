import React from 'react'
import './mainStyle.css'
export default function Main () {
  return (
    <section className="hero">
        <div className='About_Page'>
        <h1 className='about__page__title'>ICONOGRAPHY</h1>
          <p>Iconography Showcase is a curated collection of stunning images, 
            each telling its own story with unique locations, captivating 
            descriptions, and the talented authors behind each masterpiece.</p>
        </div>
        <div className='gallery'>
          <img src='../images/bhadraRiver.png'/>
          <img src='../images/jogFalls.png'/>
          <img src='../images/mallalli_falls.png'/>
          <img src='../images/Murudeshwara.png'/>
          <img src='../images/Hampi.png'/>
        </div>
    </section>
  )
}
