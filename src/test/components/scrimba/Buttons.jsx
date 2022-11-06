import React from 'react'
import {FaEnvelope,FaLinkedin} from 'react-icons/fa'

export default function Buttons() {
    return <div className="card--buttons">
        <a href='mailto:rhvsingh004@gmail.com'><FaEnvelope /> Email</a>
        <a href='https://linkedin.com/in/rhvsingh'><FaLinkedin /> LinkedIn</a>
    </div>
}