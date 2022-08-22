import React from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'

export default function Navigation() {
  const clickCheck = 1;
  return (
    <header className='d-flex justify-between align-items-center'>
      <div style={{marginLeft: '10px'}}>Logo</div>
      <nav>
        <span style={{display: 'none'}}>{clickCheck ? <FaBars />: <FaTimes />}</span>
        <span></span>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/table'>Table</Link></li>
          <li><a href='/#'>Contact</a></li>
          <li><a href="/#">About</a></li>
        </ul>
      </nav>
    </header>
  )
}
