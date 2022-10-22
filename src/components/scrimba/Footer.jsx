import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
    return <footer className='card--footer'>
        <ul>
            <li><a href="https://twitter.com/rhvsingh" target="_blank" rel='noreferrer'><FaTwitterSquare /></a></li>
            <li><a href="https://facebook.com/rhvsingh004" target="_blank"rel='noreferrer'><FaFacebookSquare /></a></li>
            <li><a href="https://instagram.com/rhvs_official" target="_blank"rel='noreferrer'><FaInstagramSquare /></a></li>
            <li><a href="https://github.com/rhvsingh" target="_blank"rel='noreferrer'><FaGithubSquare /></a></li>
        </ul>
    </footer>
}