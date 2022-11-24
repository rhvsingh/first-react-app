import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaAngleDown } from 'react-icons/fa'

import ScrollIndicator from './ScrollIndicator'

export default function Navigation() {
  const [navData, setNavData] = useState([])

  const fetchNav = async () => {
    const res = await fetch('http://localhost:5000/navigation')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getNav = async () => {
      const navFromServer = await fetchNav()
      setNavData(navFromServer)
    }

    getNav()
  }, [])

  const [counter, setCounter] = useState(0)
  const [idChecker, setIdChecker] = useState(-1)
  const [clickCheck, setClickCheck] = useState(1)

  const mover = (id) => {
    console.log(id)
    if (idChecker === id) {
      setIdChecker(-1)
    } else {
      let dropArray = document.getElementsByClassName('dropdown-menu');
      for (let i = 0; i < dropArray.length; i++) {
        dropArray[i].style.display = 'none';
      }
      setIdChecker(id)
    }
    let dropArray = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropArray.length; i++) {
      if (parseInt(dropArray[i].getAttribute('data-id')) === id) {
        console.log('Matched', i, id)
        let dropDown = dropArray[i]
        let windowWidth = window.innerWidth
        if (counter === 0 || idChecker !== id) {
          dropDown.style = "display:block;"
          setCounter(1)
        } else {
          dropDown.style = "display:none;"
          setCounter(0)
          return
        }

        let right = dropDown.getBoundingClientRect().right
        console.log(windowWidth, right)
        if (windowWidth > right) {
          dropDown.style.right = "auto";
          console.log('Left')
        } else {
          dropDown.style.right = "0";
          console.log('Right')
        }
      }

    }
    /* let dropDown = document.getElementsByClassName('dropdown-menu')[id]
    let windowWidth = window.innerWidth
    if (counter === 0 || idChecker !== id) {
      dropDown.style = "display:block;"
      setCounter(1)
    } else {
      dropDown.style = "display:none;"
      setCounter(0)
      return
    }

    let right = dropDown.getBoundingClientRect().right
    console.log(windowWidth, right)
    if (windowWidth > right) {
      dropDown.style.right = "auto";
      console.log('Left')
    } else {
      dropDown.style.right = "0";
      console.log('Right')
    } */
  }

  const navToggler = () => {
    if (clickCheck === 1) {
      setClickCheck(0)
      document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
    } else {
      setClickCheck(1)
      document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
    }
  }

  /* const [viewWidth,setViewWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener("resize", () => setViewWidth(window.innerWidth));
    setViewWidth(window.innerWidth)
  },[])

  useEffect(()=>{
    console.log(viewWidth)
    if(viewWidth > 500) {
      document.getElementsByTagName('nav')[0].style.display = 'block'
      setClickCheck(0)
    } else {
      document.getElementsByTagName('nav')[0].style.display = 'none'
      setClickCheck(1)
    }
  },[viewWidth]) */

  return (
    <>
      <header className='d-flex justify-between align-items-center'>
        <div className='logo'>Logo</div>
        <div className='menu-toggler' onClick={() => navToggler()} >{clickCheck ? <FaBars /> : <FaTimes />}</div>
        <nav>
          <span></span>
          <ul>
            {navData.map((data, index) => {
              return (data.dropDown === '' ? <li key={index}><Link to={'/' + data.link}>{data.name}</Link></li> :
                (<li key={index}>
                  <button onClick={() => mover(index)}>{data.name} <FaAngleDown className='dropDown-arrow' /></button>
                  <ul className='dropdown-menu' data-id={index}>
                    {data.dropDown.links.map((dropData, index) => {
                      //console.log(dropData.dropLink, dropData.dropName)
                      return (<li key={index}><Link to={'/' + dropData.dropLink}>{dropData.dropName}</Link></li>)
                    }
                    )}
                  </ul>
                </li>)
              )
            })}
            {/* <li><Link to='/'>Home</Link></li>
          <li><Link to='/table'>Table</Link></li>
          <li>
            <button  onClick={()=>mover(0)}>Contact</button>
            <ul className='dropdown-menu'>
              <li>Address</li>
              <li>Phone</li>
              <li>E-Mail</li>
            </ul>
          </li>
          <li>
            <button onClick={()=>mover(1)}>About</button>
            <ul className='dropdown-menu'>
              <li>Address</li>
              <li>Phone</li>
              <li>E-Mail</li>
            </ul>
          </li> */}
          </ul>
        </nav>
      </header>
      <ScrollIndicator />
    </>
  )
}
