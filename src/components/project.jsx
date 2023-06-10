import React from 'react'
import { Link } from 'react-router-dom'
import CAR from '../img/CAR.png'
import Chat from '../img/Chat.png'
import Piano from '../img/Piano.png'
import Github from '../img/github.png'


const Project = () => {
  return (
    <div className='portfolio' id='Project'>
      <h2>Portfolio</h2>
      <h3>Each project is unique in development</h3>
      <div className='container_portfolio'>
        <div className='project_flex'>
          <div className='project_flex_div'>
            <div className='imgCAR'><img src={CAR} alt="CarProject" /></div>
            <div className='project_text'>
              <h3>RentCar</h3>
              <div className='project_link'>
                <Link to="/Car" className='project_link_demo'>Demo </Link> 
                <a href="https://github.com/Ri4ill/Car" className='project_link_git'> Code <img className='git' src={Github} alt="git_logo" /></a>
              </div>
              <h4>
                in this project, a form is implemented that converts the database into a clear interface using react hooks     
              </h4>
            </div>
          </div>
          <div className='project_flex_div'>
            <div className='project_text textChat'>
              <h3>Live Chat</h3>
              <div className='project_link'>
                <Link to="/Chat" className='project_link_demo'>Demo </Link> 
                <a href="https://github.com/Ri4ill/ChatLive" className='project_link_git'> Code <img className='git' src={Github} alt="git_logo" /></a>
              </div>
              <h4>
                This site implements data exchange with the server. for react frontend for backend socket.io, cors and express. the server is running on nginx
             </h4>
            </div>
            <div className='imgCAR'><img src={Chat} alt="ChatProject" /></div>
          </div>
          <div className='project_flex_div'>
            <div className='imgCAR'><img src={Piano} alt="PianoProject" /></div>
            <div className='project_text'>
              <h3>Piano</h3>
              <div className='project_link'>
                <Link to="/Piano" className='project_link_demo'>Demo </Link> 
                <a href="https://github.com/Ri4ill/Piano" className='project_link_git'> Code <img className='git' src={Github} alt="git_logo" /></a>
              </div>
              <h4>
              here is implemented work with sounds in the browser. Tuna js, MUI and react were used for work
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project