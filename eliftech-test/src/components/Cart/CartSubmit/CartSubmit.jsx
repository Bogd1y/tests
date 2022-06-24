import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CartSubmit.module.css'

let captchaEnjoyer = Math.ceil(Math.random() * (0, 99999))

const CartSubmit = ({ captcha, setCaptcha, totalPrice, setHistoryAndSubmit, telNum, address, cart }) => {

  let navigate = useNavigate()
  let setHistorySubmitAndNavigate = () => {
    navigate('/history')
    setHistoryAndSubmit()
  }

  return (
    <div className={styles.item}>
      <p>Total price {totalPrice}$</p>
      <label htmlFor="captcha">Enter captcha</label>
      <input placeholder={captchaEnjoyer}
        type="text" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
      <div>
        {telNum && address && cart.length && captcha == captchaEnjoyer ? (
          <button style={{ cursor: 'pointer' }}
            type="submit" onClick={setHistorySubmitAndNavigate}>
            Submit
          </button>) : (
          <button style={{ cursor: 'not-allowed' }}
            type="submit" disabled>
            Need to fill data or <br /> add at least 1 products
          </button>
        )}
      </div>
    </div>
  )
}

export default CartSubmit