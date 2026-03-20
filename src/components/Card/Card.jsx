import React from 'react'
import './Card.css'

function Card({ title, image, liveLink, githubLink }) {
  return (
    <div className="card">

      <h1>{title}</h1>

      <div className="hovercard">
        <img src={image} alt="" />

        {/* 🔥 SHOW ONLY IF LINK EXISTS */}
        {liveLink && githubLink && (
          <div className="buttons">
            <a href="https://aineyvirtual.netlify.app"  target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/mansi367"  target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        )}

      </div>

    </div>
  )
}

export default Card