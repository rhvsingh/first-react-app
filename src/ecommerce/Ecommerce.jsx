import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './assets/components/Navigation'
import ProductShow from './assets/pages/ProductShow'
import Cart from './assets/pages/Cart'
import NotFoundPage from '../test/components/NotFoundPage'
import Login from './assets/components/Login'

const Ecommerce = () => {

    const [isAuth, setIsAuth] = useState(false)
    if (isAuth) {

    } else {

    }



    const Ecommerce = () => {
        return (<p>This is Ecommerce section</p>)
    }

    return (
        <div>
            <Navigation logged={isAuth} setLogged={setIsAuth} />
            <Routes>
                <Route index element={<Ecommerce />} />
                {isAuth ?
                    <>
                        <Route path="/products" element={<ProductShow />} />
                        <Route path="/cart" element={<Cart />} />
                    </> : <Route path='/login' element={<Login auth={setIsAuth}/>} />
                }

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default Ecommerce