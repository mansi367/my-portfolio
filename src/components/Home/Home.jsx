// import React from 'react'
// import './Home.css'
// import ReactTypingEffect from 'react-typing-effect'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'


// function Home() {

//   useGSAP(()=>{
//     let tl1=gsap.timeline();
//     tl1.from(".line1",{y:80,duration:1,opacity:0})
//     tl1.from(".line2",{y:80,duration:1,opacity:0})
//     tl1.from(".line3",{y:80,duration:1,opacity:0})

//     gsap.from(".rightHome img",{
//       x:200,
//       duration:1,
//       opacity:0
//     })
//   })

//   return (
//   <>
//   <div id='home'>
//    <div className="leftHome">
//     <div className="homeDetails">
//        <div className="line1"> Hello I'M</div>
//        <div className="line2">MANSI BHARGAV</div>

//        <div className="line3">
//         <ReactTypingEffect 
//         text={["WEB DEVELOPER","SOFTWARE DEVELOPER","CODER"]}
//         speed={100}
//         eraseSpeed={50}
//         eraseDelay={1000}
//         typingDelay={500}
//         cursor='|'
//         />
//        </div>

//       <a href="/resume.pdf" download>
//   <button>View Resume</button>
// </a>

//     </div>
//    </div>

//    <div className="rightHome">
//     <img src='me.png' alt='' />
//    </div>
//   </div>
//   </>
//   )
// }

// export default Home




// //======================================================================
// // import React from 'react'
// // import './HOME.css'
// // import ReactTypingEffect from 'react-typing-effect'
// // import { useGSAP } from '@gsap/react'
// // import gsap from 'gsap'

// // function Home() {
// //   useGSAP(()=>{
// //     let tl1=gsap.timeline();
// //     tl1.from(".line1",{
// //       y:80,
// //       duration:1,
// //       opacity:0
// //     })
// //     tl1.from(".line2",{
// //       y:80,
// //       duration:1,
// //       opacity:0
// //     })
// //     tl1.from(".line3",{
// //       y:80,
// //       duration:1,
// //       opacity:0
// //     })

// //     gsap.from(".rightHome img",{
// //       x:200,
// //       duration:1,
// //       opacity:0
// //     })
    
// //   })
// //   return (
// //   <>
// //   <div id='home'>
// //    <div className="leftHome">
// //     <div className="homeDetails">
// //        <div className="line1">I'M</div>
// //        <div className="line2">MANSI BHARGAV</div>
// //        <div className="line3">
// //         <ReactTypingEffect 
// //         text={["WEB DEVELOPER","SOFTWARE DEVELOPER","CODER"]}
// //         speed={100}
// //         eraseSpeed={50}
// //         eraseDelay={1000}
// //         typingDelay={500}
// //         cursor='|'
// //         />
// //        </div>
// //         <button>Resume</button>

// //     </div>

// //    </div>

// //    <div className="rightHome">
// //     <img src='me.png' alt='' />
// //    </div>
   
// //   </div>
  
// //   </>
// //   )
// // }

// // export default Home

//===============================================================

import React from 'react'
import './Home.css'
import ReactTypingEffect from 'react-typing-effect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// ✅ icons import
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {

  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{y:80,duration:1,opacity:0})
    tl1.from(".line2",{y:80,duration:1,opacity:0})
    tl1.from(".line3",{y:80,duration:1,opacity:0})

    gsap.from(".rightHome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })

  return (
  <>
  <div id='home'>
   <div className="leftHome">
    <div className="homeDetails">

       <div className="line1"> Hello I'M</div>
       <div className="line2">MANSI BHARGAV</div>

       <div className="line3">
        <ReactTypingEffect 
        text={["WEB DEVELOPER","SOFTWARE DEVELOPER","CODER"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={1000}
        typingDelay={500}
        cursor='|'
        />
       </div>

      {/* Resume Button */}
      <a href="/resume.pdf" download>
        <button>View Resume</button>
      </a>

      {/* 🔥 ADD THIS PART */}
      <div className="social-icons">
        
        <a 
          href="https://www.linkedin.com/in/mansi-bhargav" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com/mansi367" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

 <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mansibhargav765@gmail.com"
  target="_blank"
  title="Email"
>
  <MdEmail />
</a>
      </div>

    </div>
   </div>

   <div className="rightHome">
    <img src='me.png' alt='' />
   </div>
  </div>
  </>
  )
}

export default Home