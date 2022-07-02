import React from 'react'
import styles from './CartContent.module.css'
import CartItem from './CartItem/CartItem'


const CartContent = ({ cart, setCartArray, setCart, cartArray }) => {
  return (
    <div className={styles.cartCont}>
      {cart.length === 0 ? <div className={styles.noItems}>No items in cart yet...</div> :
        cart.map(item => (
          <CartItem key={Math.random()} data={item}
            setCartArray={setCartArray} cartArray={cartArray}
            setCart={setCart}
            cart={cart}
          />
        ))

      }
    </div>
  )
}

export default CartContent