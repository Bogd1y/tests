import React from 'react'
import style from './ShopSItem.module.css'


const ShopSItem = ({ data, setProducts, id, isDisabled, shops }) => {
    // debugger
    let shopProducts = shops.filter(item => item.id === id)
  
    return (
        <button disabled={isDisabled} className={style.list} onClick={() => setProducts(shopProducts[0].products)}>
            <div >
                {data.name}
            </div>
        </button>
    )
}

export default ShopSItem