import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
const active = ({isActive}) => isActive ? s.active : s.div ;
const Header = () => {
  
  return (
    <header><br/>
      <nav className={s.nav}>
        <div ><NavLink to="/" className = {active}>Pages</NavLink></div>
        <div ><NavLink to="/users" className = {active}>Users</NavLink></div>
        <div ><NavLink to="/page2" className = {active}>Page2</NavLink></div>
        
        </nav><br/>
    </header>
  )
}

export default Header