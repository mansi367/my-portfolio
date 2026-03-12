import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/va.png"
import rec from "../../assets/rec.png"
import wa from "../../assets/wa.png"
import rtt from "../../assets/rtt.png"
import game from "../../assets/game.png"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
     
      start:"top 80%",
      end:"top 30%"
    }
  })

  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
     
      start:"top 80%",
      end:"top 30%"
    }

  })
})


  return (
    <>
    <div id="projects">
        <h1 id="para"> THESE ARE SOME OF MY PROJECTS </h1>
            <div className="slider">
                <Card title="VIRTUAL ASSISTANT" image={va} />
                <Card title="LEXIQO Word Scramble Game" image={game} />
                <Card title="RECRUITE_X" image={rec}/>
                <Card title="Real_Time_Tracker" image={rtt}/>
                <Card title="WEATHER_APP" image={wa}/>
                {/* <Card/> */}

            </div>
       
    </div>
    
    </>
  )
}

export default Projects
