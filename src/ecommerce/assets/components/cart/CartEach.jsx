import React, { useState } from 'react'
const CartEach = ({ details, deleteCart, changeQty }) => {
    const baseURL = 'http://localhost:4000/'
    const proDetails = details.productDetails[0]
    const [qty, setQty] = useState(details.qty)

    async function qtyChanger(qty, pid) {
        await changeQty(qty, pid)
        setQty((oldValue) => {

            let newValue = oldValue + qty
            if (newValue === 0) {
                deleteCart(details.pid)
            }
            if (newValue >= 0) {
                return newValue
            }
        })
    }

    return (
        <div className='cart-child d-flex align-items-center justify-between'>
            <div className='d-flex align-items-center'>
                <div className='cart-image'>
                    <img src={baseURL + 'uploads/' + proDetails.img} alt={proDetails.name} />
                </div>
                <div className='cart-child-detail px-1'>
                    <div className='cart-name'>{proDetails.name}</div>
                    <div className='cart-desc'>{proDetails.desc}</div>
                    <div className='cart-amount'>
                        <span className='cart-price'>{proDetails.price}</span>
                        <span className='cart-discount'>(-{proDetails.discount}%)</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='cart-qty'>Quantity: <span onClick={e => qtyChanger(-1, proDetails.pid)}>-</span>{qty}<span onClick={e => qtyChanger(1, proDetails.pid)}>+</span></div>
            </div>
        </div>
    )
}

export default CartEach