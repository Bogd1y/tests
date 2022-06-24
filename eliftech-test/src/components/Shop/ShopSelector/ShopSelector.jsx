import React from 'react'
import shops from '../../../data/fake-data'
import ShopSItem from './ShopSItem/ShopSItem'
import style from './ShopSelector.module.css'

const ShopSelector = ({ setProducts, isDisabled }) => {
  return (
    <div className={style.sideContainer}>
      <h2>Shops:</h2>
      {shops.map(item => (
        <ShopSItem key={item.id} id={item.id}
          isDisabled={isDisabled} data={item} setProducts={setProducts} />
      ))}
    </div>
  )
}

export default ShopSelector