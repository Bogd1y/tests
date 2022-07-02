import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>

      <NavLink className={styles.navLink} to='/shop'>Shop</NavLink>
      <div className={styles.line}></div>
      <NavLink className={styles.navLink} to='/cart'>Cart</NavLink>
      <div className={styles.line}></div>
      <NavLink className={styles.navLink} to='/history'>History</NavLink>
    </header>
  )
}

export default Header