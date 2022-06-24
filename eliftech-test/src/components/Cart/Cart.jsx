import React, { useState } from 'react'
import styles from './Cart.module.css'
import CartContent from './CartContent/CartContent'
import CartForm from './CartForm/CartForm'
import CartSubmit from './CartSubmit/CartSubmit'

const Cart = ({ cart, totalPrice, setCartArray, setCart, cartArray, setHistory, history }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telNum, setTelNum] = useState('')
  const [address, setAddress] = useState('')
  const [captcha, setCaptcha] = useState('')
  // debugger
  const setHistoryAndSubmit = () => {
    let temp = {
      products: [...cartArray],
      totalPrice: totalPrice,
      time: Date().substring(3, 21)
    }
    setName('')
    setEmail('')
    setTelNum('')
    setAddress('')
    setCartArray([])
    setCart([])
    setHistory([...history, temp])
    localStorage.setItem('orders', JSON.stringify([...history, temp]));
  }

  return (<>
    <div className={styles.flex} >
      <div className={styles.flexL}>
        <CartForm name={name} setName={setName}
          email={email} setEmail={setEmail}
          telNum={telNum} setTelNum={setTelNum}
          address={address} setAddress={setAddress}
          className={styles.form} />
      </div>
      <div className={styles.flexR}>
        <CartContent
          cartArray={cartArray}
          setCartArray={setCartArray}
          setCart={setCart}
          cart={cart} />
      </div>
    </div>
    <CartSubmit setHistoryAndSubmit={setHistoryAndSubmit}
      telNum={+telNum} address={address} captcha={captcha}
      cart={cart} setCaptcha={setCaptcha}
      totalPrice={totalPrice} />
  </>
  )
}

export default Cart