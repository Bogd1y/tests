import React from 'react'
import { Link } from 'react-router-dom'
import styles from './History.module.css'
import HistoryItem from './HistoryItem/HistoryItem'

const History = ({ history }) => {

    return (
        <div className={styles.history}>
            {history.length ? (
                <div className={styles.historyList}>{history.map(i => <HistoryItem item={i} key={Math.random()} />)}</div>
            ) : (
                <div className="">
                    No history yet, <Link to='/shop'>go shop  </Link>
                </div>
            )}
        </div>
    )
}

export default History