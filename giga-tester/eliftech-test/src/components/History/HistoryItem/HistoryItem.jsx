import React from 'react'
import styles from './HistoryItem.module.css'
import HistoryProduct from './HistoryProduct/HistoryProduct'

const HistoryItem = ({ item }) => {

  return (
    <div className={styles.historyItem}>
      <div>{item.products.map(prod => <HistoryProduct key={Math.random()} prod={prod} />)}</div>
      <p>Total price: {item.totalPrice}$ </p>
      <span>{item.time}</span>
    </div>
  )
}

export default HistoryItem