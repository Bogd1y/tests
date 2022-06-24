import React from 'react'
import ProductItem from './ShopProducts/ProductItem/ProductItem'
import styles from './ShopContent.module.css'

const ShopContent = ({ allProducts, setCart, cart, setCartArray, setIsDisabled }) => {


    return (
        <div className={styles.prodList}>
            {allProducts.map(item => (
                <ProductItem key={item.id} product={item}
                    setCart={setCart} setCartArray={setCartArray}
                    cart={cart} setIsDisabled={setIsDisabled}
                />
            ))}
        </div>
    )
}

export default ShopContent