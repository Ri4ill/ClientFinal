import React,{useState} from 'react'
import { Outlet, NavLink} from 'react-router-dom'
const Nav = () => {
  const [burger,setBurger] = useState(false);
  return (
  <>
    <div className='header'>
        <h2>Richard.dev</h2>
          <div className='nav'>
            <div><NavLink to='/' style={{ textDecoration:'none' , color: 'black'}}>Home</NavLink></div>
            <div><NavLink to='/About' style={{ textDecoration:'none', color: 'black' }}>About</NavLink></div>
            <div><NavLink to='/Project' style={{ textDecoration:'none', color: 'black' }}>Project</NavLink></div>
            <div><NavLink to='/Contact' style={{ textDecoration:'none', color: 'black' }}>Contact</NavLink></div>
          </div>
          <div className={burger ? "nav_burger_activ" : "nav_burger"} onClick={()=>{setBurger(!burger)}}>
            <h2>X</h2>
            <div className='nav_burger_activ_div'>
              <div>X</div>
                <NavLink to='/' style={{ textDecoration:'none' , color: '#FFF'}}>
                  Home
                </NavLink>
                <NavLink to='/About' style={{ textDecoration:'none', color: '#FFF' }}>
                  About
                </NavLink>
                <NavLink to='/Project' style={{ textDecoration:'none', color: '#FFF' }}>
                  Project
                </NavLink>
                <NavLink to='/Contact' style={{ textDecoration:'none', color: '#FFF' }}>
                  Contact
                </NavLink>
            </div>
          </div>
    </div>
    <div className="conatiner">
      <Outlet/>
    </div>
  </>
  )
}

export default Nav