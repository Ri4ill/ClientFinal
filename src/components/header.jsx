import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Nav from './nav'
import Me from './meMain'
import About from './about'
import Project from './project'
import Contact from './contact'
import Car from '../Project/car'
import Chat from '../Project2/chat'
import Piano from '../Project3/kaybord'

const Header = () => {
  return (
  <Routes>
    <Route path='/' element={<Nav/>}>
      <Route index element={<Me/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Route>
    <Route path='/Car' element={<Car/>}/>
    <Route path='/Chat'  element={<Chat/>}/>
    <Route path='/Piano'  element={<Piano/>}/>
  </Routes>
  )
}

export default Header