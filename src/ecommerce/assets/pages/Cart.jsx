import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartSkeleton from '../components/cart/CartSkeleton'
import CartEach from '../components/cart/CartEach'

import './cart.css'

const Cart = ({ isAuth }) => {
    const navigate = useNavigate()

    if (isAuth) {

    } else {
        navigate('/ecommerce/login')
    }

    const baseURL = 'http://localhost:4000/'
    const [cartCount, setCartCount] = useState(0);
    const [totalCartCount, setTotalCartCount] = useState(0);
    const [cartDetails, setCartDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let apiURL = baseURL + 'cartCount/' + localStorage.getItem('akey')
        axios.get(apiURL).then((response) => {
            setCartCount(response.data.count)
            setTotalCartCount(response.data.totalQty)
        })
    }, [totalCartCount]);

    useEffect(() => {

        let apiURL = baseURL + 'showCart/' + localStorage.getItem('akey')
        axios.get(apiURL).then((response) => {
            setCartDetails(response.data.result);
            setIsLoading(false)
        })
    }, []);

    const changeQty = (qty, pid) => {

        let apiURL = baseURL + 'addCart/' + localStorage.getItem('akey')

        axios.post(apiURL, {
            "pid": pid,
            "qty": qty
        }).then((response) => {
            setTotalCartCount(oldValue => oldValue + qty)
        })
    }

    const deleteCart = (data) => {
        setCartDetails(
            cartDetails.filter(cart => {
                return cart.pid !== data
            })
        )
    }

    return (
        <>
            <div>
                <div>
                    Products in Cart: {cartCount} <br />
                    Total Items: {totalCartCount}
                </div>
                <div className='cart-details'>
                    {isLoading && <CartSkeleton carts={4} />}
                    {cartDetails.length > 0 && cartDetails.map((item) => {
                        return <CartEach key={item._id} details={item} changeQty={changeQty} deleteCart={deleteCart} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart