import React from 'react'
import Mail from '../img/mail.png'
import Git from '../img/github.png'
import In from '../img/in.png'
const Contact = () => {
  return (
    <div className='contact_grup'>
      <div className='contact'>
        <div className='contact_div'><img src={Git} alt="github" /><div></div><a href="https://github.com/Ri4ill"><h2>github</h2></a></div>
        <div className='contact_div'><img src={Mail} alt="mail" /><div></div><a href="mailto:r.safurik@gmail.com"><h2>mail</h2></a></div>
        <div className='contact_div'><img src={In} alt="likin" /><div></div><a href="https://www.linkedin.com/in/richard-safu-735208274/"><h2>linkedin</h2></a></div>
      </div>
    </div>
  )
}

export default Contact