import React from 'react'
import styles from './CartForm.module.css'

const CartForm = ({ name, setName,
  email, setEmail,
  telNum, setTelNum,
  address, setAddress }) => {
  return (
    <form className={styles.form}>
      <label htmlFor='text'>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)}
        className={styles.input} type="text" placeholder='Your name and surname' />

      <label htmlFor='email'>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)}
        className={styles.input} type="email" />

      <label htmlFor="tel">Tel Num:</label>
      <input value={telNum} onChange={(e) => setTelNum(e.target.value)}
        className={styles.input} type='number' placeholder='must have' />

      <label htmlFor="address">Address:</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)}
        className={styles.input} type="text" placeholder='must have' />
    </form>
  )
}

export default CartForm