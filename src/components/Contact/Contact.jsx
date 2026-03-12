import React from 'react'
import cont from "../../assets/cont.png"
import "./Contact.css"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

function Contact() {
  useGSAP(()=>{
    gsap.from(".leftContact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftContact img",
        scroll:"body",
        scrub:2,
       
        start:"top 80%",
        end:"top 30%"
      }
    })

    gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"form",
        scroll:"body",
        scrub:2,
       
        start:"top 80%",
        end:"top 30%"
      }
    })
  
  })

  return (
   <>
   <div id="contact">
    <div className="leftContact">
        <img src={cont} alt='' />
    </div>
    <div className="rightContact">
      <form action='https://formspree.io/f/movjjpgj' method='POST'>
      <input name='Username' type='text' placeholder=' Name'/>
      <input name='Email' type='email' placeholder='Email'/>
      <textarea name='message' id='textarea' placeholder='Message me'></textarea>
      <input type='submit' id='btn' value="Submit"/>
      </form>
    </div>
   </div>

   </>
  )
}

export default Contact
