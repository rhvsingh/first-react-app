import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

import Navigation from './assets/components/Navigation'
import ProductShow from './assets/pages/ProductShow'
import Cart from './assets/pages/Cart'
import NotFoundPage from '../test/components/NotFoundPage'
import Login from './assets/components/Login'
import Footer from './assets/components/Footer'

const Ecommerce = () => {
    const navigate = useNavigate()

    let localSet

    if (localStorage.getItem('email') && localStorage.getItem('akey')) {
        localSet = true
    } else {
        localSet = false
    }

    const [isAuth, setIsAuth] = useState(localSet)
    if (isAuth) {

    } else {

    }

    const Ecommerce = () => {
        return (<p>This is Ecommerce section</p>)
    }

    const LoginRedirect = () => {

        useEffect(() => {
            navigate('/ecommerce')
        }, [])
    }

    return (
        <div style={{backgroundColor: '#ddd'}}>
            <Navigation logged={isAuth} setLogged={setIsAuth} />
            <Routes>
                <Route index element={<Ecommerce />} />
                {isAuth ?
                    <>
                        <Route path="/products" element={<ProductShow isAuth={isAuth} />} />
                        <Route path="/cart" element={<Cart isAuth={isAuth} />} />
                        <Route path='/login' element={<LoginRedirect />} />
                    </> :
                    <>
                        <Route path="/products" element={<ProductShow isAuth={isAuth} />} />
                        <Route path="/cart" element={<Cart isAuth={isAuth} />} />
                        <Route path='/login' element={<Login auth={setIsAuth} />} />
                    </>
                }

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Ecommerce