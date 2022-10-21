import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CartSkeleton from '../components/cart/CartSkeleton'
import CartEach from '../components/cart/CartEach'

import './cart.css'

const Cart = () => {

    const baseURL = 'http://localhost:4000/'
    const [cartCount, setCartCount] = useState(0);
    const [cartDetails, setCartDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL + 'cartCount').then((response) => {
            setCartCount(response.data.count);
        })
    }, []);

    useEffect(() => {
        axios.get(baseURL + 'showCart').then((response) => {
            setCartDetails(response.data.result);
            setIsLoading(false)
        })
    }, []);

    const deleteCart = (data) => {
        setCartDetails(
            cartDetails.filter(cart => {
                return cart.pid !== data
            })
        )
    }

    return (
        <div>
            <div>
                Cart {cartCount}
            </div>
            <div className='cart-details'>
                {isLoading && <CartSkeleton carts={4} />}
                {cartDetails.length > 0 && cartDetails.map((item) => {
                    return <CartEach key={item._id} details={item} deleteCart={deleteCart} />;
                })}
            </div>
        </div>
    )
}

export default Cart