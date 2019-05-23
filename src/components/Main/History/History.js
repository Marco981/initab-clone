import React from 'react'
import styles from './History.module.css'
import { FaHistory } from 'react-icons/fa'

const history = props => {
  const entries = props.entries.map(entry => (
    <li className={styles.HistoryEntryContainer}>
      <div className={styles.HistoryEntry}>
        <img src={entry.iconURL} alt={entry.iconAlt} />
        <a href={entry.contentURL}>{entry.content}</a>
      </div>
      <div className={styles.HistoryDate}>{entry.date}</div>
    </li>
  ))
  return (
    <section className={styles.History}>
      <div className={styles.HistoryLinks}>
        <h6 className={styles.Title}>
          <FaHistory style={{ marginRight: '.5rem' }} />
          relevant javascript history
        </h6>
        {entries}
      </div>
    </section>
  )
}

export default history
