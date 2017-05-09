import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

const NavBar = () => (
  <div className="navbar">
    <div className="container clearfix">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/topics">Topics</NavLink>
    </div>
  </div>
)

export default NavBar
