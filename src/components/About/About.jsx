import React from 'react'
import './About.css'
import Card from '../Card/Card'

import py from '../../assets/py.png'
import dsa from '../../assets/dsa.png'
import js from '../../assets/js.png'
import mern from '../../assets/mern.png'




import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
useGSAP(()=>{
  gsap.from(".circle",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
     
      start:"top 60%",
      end:"top 30%"
    }
  })


  gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".line",
      scroll:"body",
      scrub:2,
     
      start:"top 60%",
      end:"top 30%"
    }
  })


  gsap.from(".aboutDetails h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutDetails h1",
      scroll:"body",
      scrub:2,
     
      start:"top 60%",
      end:"top 30%"
    }
  })

  gsap.from(".aboutDetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutDetails ul",
      scroll:"body",
      scrub:2,
     
      start:"top 60%",
      end:"top 30%"
    }
  })



  gsap.from(".rightAbout",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".rightAbout",
      scroll:"body",
      scrub:2,
     
      start:"top 60%",
      end:"top 30%"
    }
  })


  
})

  return (
   <>
   <div id="about">
   <div className="leftAbout">
    <div className="circle-line">
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
    </div>

    <div className="aboutDetails">
      {/* -------------------PERSONAL INFO------------------------- */}
      <div className="personalInfo">
       <h1>Personal Info</h1>
       <ul>
         <li>
        <span>NAME</span> : MANSI BHARGAV
         </li>
         <li>
        <span>AGE</span> : 21 YEARS
         </li>
         <li>
        <span>GENDER</span> : FEMALE
         </li>
         <li>
        <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
         </li>
       
       </ul>

      </div>

    {/* ----------------------EDUCATION--------------------------- */}
      <div className="education">
       <h1>EDUCATION</h1>
       <ul>
         <li>
        
        <span>DEGREE</span> : DIPLOMA + B.TECH('28)
         </li>
         <li>
        <span>BRANCH</span> : INFORMATION TECHNOLOGY
         </li>
         <li>
        <span>COLLEGE</span> : GOVERNMENT GIRLS POLYTECHNIC AYODHYA 
         </li>
        
       </ul>

      </div>

    {/* -----------------------SKILLS----------------------------- */}
      <div className="Skills">
       <h1>SKILLS</h1>
       <ul>
         <li>
         PYTHON
         </li>

         
         <li>
          DSA
         </li>
      
           <li>
         JavaScript
         </li>


         <li>
         MERN STACK
         </li>

      

         
         {/* <li>
        AWS
         </li> */}
       </ul>

      </div>
    </div>
    
   </div>

   <div className="rightAbout">
    <Card title="Python" image={py}/>
    {/* <Card title="DSA" image={dsa}/> */}
    <Card title="JavaScript" image={js}/>
    <Card title="MERN STACK" image={mern}/>
     
   
    
   
   
   </div>


   </div>
   
   </>
  )
}

export default About
