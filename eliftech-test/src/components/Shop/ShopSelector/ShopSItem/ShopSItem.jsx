import React, { useEffect } from 'react'
import style from './ShopSItem.module.css'
import shops from '../../../../data/fake-data'

const ShopSItem = ({ data, setProducts, id, isDisabled }) => {
    let shopProducts = shops.filter(item => item.id === id)
    useEffect(()=>{
        setProducts(data.id)
    }, [data])
    return (
        <button disabled={isDisabled} className={style.list} onClick={() => setProducts(shopProducts[0].products)}>
            <div >
                {data.name}
            </div>
        </button>
    )
}

export default ShopSItem