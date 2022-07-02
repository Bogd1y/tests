import React, { useState } from 'react'
import styles from './CartItem.module.css'

const CartItem = ({ data, setCartArray, setCart, cart, cartArray }) => {
    const [count] = useState(cartArray.filter(i => i.id == data.id).length)

    if (count == 0) {
        return (
            <></>
        )
    }

    const setCountAndAdd = () => {
        setCartArray([...cartArray, cartArray.find(i => i.id == data.id)])
    }
    // debugger
    const test = (params) => {
        let arrToDecr = [];

        let co = 0;
        for (let i = 0; i < cartArray.length; i++) {
            arrToDecr.push(cartArray[i]);
            if (cartArray[i].id === params && co === 0) {
                co = 1;
                arrToDecr.pop();
            }
        }
        return arrToDecr
    };
    const unsetCountAndAdd = () => {

        if (count == 1) { setCart(cart.filter(i => i.id !== data.id)) }
        setCartArray(test(data.id))
    }

    const totalSum = cartArray.filter(i => i.id == data.id).map(j => j.price).reduce((p, c) => p + c)


    return (
        <div className={styles.cartItem}>
            <div className={styles.image}>
                <img src={data.image} alt="" />
            </div>

            <div className={styles.content}>
                <h3>{data.productName} x{count}</h3>
                <p>{data.price}$ | total: {totalSum}</p>
                <div className={styles.buttonsCon}>
                    <div className={styles.buttons}>
                        <button onClick={unsetCountAndAdd}>
                            -
                        </button>
                        <button onClick={setCountAndAdd}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem