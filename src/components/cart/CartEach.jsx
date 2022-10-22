import React, { useState } from 'react'
import axios from 'axios';

const CartEach = ({ details, deleteCart, totalQty }) => {
    const baseURL = 'http://localhost:4000/'
    const proDetails = details.productDetails[0]
    const [qty, setQty] = useState(details.qty)

    const changeQty = (e) => {

        axios.post(baseURL + 'addCart', {
            "pid": details.pid,
            "qty": e
        }).then((response) => {
            totalQty(oldValue => oldValue + e)
        })

        setQty((oldValue) => {

            let newValue = oldValue + e
            if (newValue >= 0) {
                return newValue
            }
        })
    }

    if (qty === 0) {
        deleteCart(details.pid)
    }

    return (
        <div className='cart-child d-flex align-items-center justify-between'>
            <div className='d-flex align-items-center'>
                <div className='cart-image'>
                    <img src={baseURL + 'uploads/' + proDetails.img} alt={proDetails.name} />
                </div>
                <div className='cart-child-detail'>
                    <div className='cart-name'>{proDetails.name}</div>
                    <div className='cart-desc'>{proDetails.desc}</div>
                    <div className='cart-amount'>
                        <span className='cart-price'>{proDetails.price}</span>
                        <span className='cart-discount'>(-{proDetails.discount}%)</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='cart-qty'>Quantity: <span onClick={e => changeQty(-1)}>-</span>{qty}<span onClick={e => changeQty(1)}>+</span></div>
            </div>
        </div>
    )
}

export default CartEach