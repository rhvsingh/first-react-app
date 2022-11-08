import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaTimes, FaBars, FaUserCircle, FaAngleDown } from 'react-icons/fa'

const Navigation = ({ logged, setLogged }) => {

    const navigate = useNavigate()

    const baseURL = '/ecommerce'

    const [clickCheck, setClickCheck] = useState(1)

    const navToggler = () => {
        if (clickCheck === 1) {
            setClickCheck(0)
            document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
        } else {
            setClickCheck(1)
            document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
        }
    }

    function toggleDropdown() {
        let dropDown = document.getElementsByClassName('dropdown-menu')[0];
        if (dropDown.style.display === 'none') {
            dropDown.style = "display:block;"
        } else {
            dropDown.style = "display:none;"
        }

        let windowWidth = window.innerWidth
        let right = dropDown.getBoundingClientRect().right
        //console.log(windowWidth, right)
        if (windowWidth > right) {
            dropDown.style.right = "auto";
            //console.log('Left')
        } else {
            dropDown.style.right = "0";
            //console.log('Right')
        }

        dropDown.style.textAlign = "left";
    }

    return (
        <header className='d-flex justify-between align-items-center'>
            <div className='logo'>CartZilla</div>
            <div className='menu-toggler' onClick={() => navToggler()} >{clickCheck ? <FaBars /> : <FaTimes />}</div>
            <nav>
                <span></span>
                <ul>
                    <li><Link to={baseURL}>Home</Link></li>
                    <li><Link to={baseURL + "/products"}>Products</Link></li>
                    {logged && <li><Link to={baseURL + "/cart"}>Cart</Link></li>}
                    <li style={{ position: 'relative', width: '80px', textAlign: 'right' }}>
                        <button onClick={toggleDropdown}><FaUserCircle style={{ position: 'absolute', left: '2px', top: '6px', fontSize: '40px' }} /> <FaAngleDown className='dropDown-arrow' /></button>
                        <ul className='dropdown-menu' style={{ display: 'none' }}>
                            {logged ? <li onClick={() => setLogged(oldValue => {
                                if (oldValue === true) {
                                    localStorage.clear()
                                    navigate('/ecommerce')
                                }
                                return !oldValue
                            })}>Log Out</li> : <li><Link to={baseURL + "/login"} >Login / Sign-up</Link></li>}

                        </ul>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navigation