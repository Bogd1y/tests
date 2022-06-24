import React from 'react'
import style from './ProductItem.module.css'

let checker = []
const ProductItem = ({ product, setCart, cart, setCartArray, setIsDisabled }) => {
  // debugger

  const removeCartAndArray = () => {
    if (checker.length == 1) { setIsDisabled(false) }
    checker.pop()
    setCart(cart.filter(i => i.id !== product.id))
    setCartArray(cart.filter(i => i.id !== product.id))
  }
  const setCartAndArray = () => {
    setIsDisabled(true)
    checker.push(1)
    setCart([...cart, product])
    setCartArray([...cart, product])
  }

  return (
    <div className={style.prodItem}>
      <img src={product.image} alt="#)" />
      <h3>{product.productName}</h3>
      <div className={style.priceAndBtn}>
        <span>{product.price} $</span>
        {cart.includes(product) ?
          <button style={{ cursor: 'pointer' }}
            onClick={removeCartAndArray}>Remove </button> :
          (<button style={{ cursor: 'pointer' }}
            onClick={setCartAndArray}>Add to cart</button>)
        }
      </div>
    </div>
  )
}

export default ProductItem