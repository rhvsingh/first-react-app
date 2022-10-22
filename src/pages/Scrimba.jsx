import React from 'react'
import About from '../components/scrimba/About'
import Name from '../components/scrimba/Name'
import Buttons from '../components/scrimba/Buttons'
import Footer from '../components/scrimba/Footer'
import Image from '../components/scrimba/Image'
import Interests from '../components/scrimba/Interests'
import './scrimba.css'

const Scrimba = () => {
    return (
        <div className='card--container'>
            <div className="card">
                <Image />
                <div className="card--content">
                    <Name />
                    <Buttons />
                    <About />
                    <Interests />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Scrimba