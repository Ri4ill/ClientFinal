import React from 'react'
import emoji from '../img/emoji.png'

const About = () => {

  return (
    <div className='about' id='About'>
      <div className='about_main'>
        <div className='about_photo'>
          <img src={emoji} alt="emoji" className='about_photo_me'/>
        </div>
      </div>
      <div className='about_text'>
        <h3>ABOUT ME</h3>
        <h2>Frankness of the programmer</h2>
        <p className='about_text_me'>
          Junior Frontend Developer with 1 year of experience. Skilled in React, CSS, JavaScript. Creates efficient, responsive interfaces with good design sense. Eager to learn and deliver high-quality results. Seeks collaborative team to grow and learn from experienced colleagues        
        </p>
      </div>
    </div>
  )
}

export default About