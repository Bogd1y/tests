import React from 'react'
import ShopContent from './ShopContent/ShopContent'
import ShopSelector from './ShopSelector/ShopSelector'
import style from './Shop.module.css'
import { useState } from 'react'
import shops from '../../data/fake-data'

const Shop = ({ setCart, cart, setCartArray }) => {

    const [products, setProducts] = useState(shops[2].products)
    const [isDisabled, setIsDisabled] = useState(cart.length == 0 ? false : true)

    return (
        <div className={style.shopContainer}>
            <ShopSelector setProducts={setProducts} isDisabled={isDisabled} />
            <ShopContent setCart={setCart} setCartArray={setCartArray}
                cart={cart} setIsDisabled={setIsDisabled}
                allProducts={products} />
        </div>
    )
}

export default Shop