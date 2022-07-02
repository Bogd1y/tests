import React from 'react'
import styles from './HistoryProduct.module.css'

const HistoryProduct = ({ prod }) => {
  return (
    <div className={styles.product}>
      <img src={prod.image} alt="" />
      <p>{prod.productName}</p>
      <p>{prod.price}$</p>
    </div>
  )
}

export default HistoryProduct