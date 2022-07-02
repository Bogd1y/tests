import React, { useState } from 'react'
import ShopContent from './ShopContent/ShopContent'
import ShopSelector from './ShopSelector/ShopSelector'
import style from './Shop.module.css'
import { useEffect } from 'react'

const Shop = ({ setCart, cart, setCartArray, shops, cartArray }) => {

    const [products, setProducts] = useState(shops ? shops[0].products : [])
    const [isDisabled, setIsDisabled] = useState(cart.length == 0 ? false : true)


    let checker = false;
    for (let i = 0; i < shops.length; i++) {
        if (shops[i].products.some(i => i = cart[0])){
            checker = true
        }       
    }
    useEffect(()=>{
        if (checker == true){
            for (let i = 0; i < shops.length; i++) {
                if (shops[i].products.find(i => i == cart[0])){
                    setProducts(shops[i].products);
                }       
            } 
        }
    }, [cart])


    // debugger

    return (
        <div className={style.shopContainer}>
            <ShopSelector setProducts={setProducts} isDisabled={isDisabled} shops={shops}/>
            <ShopContent setCart={setCart} setCartArray={setCartArray} cartArray={cartArray}
                cart={cart} setIsDisabled={setIsDisabled}
                allProducts={products} />
        </div>
    )
}

export default Shop