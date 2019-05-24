import React from 'react'
import styles from './History.module.css'
import { FaHistory } from 'react-icons/fa'
import Moment from 'react-moment'

const history = props => {
  const entries = props.entries.map((entry, index) => (
    <li key={index} className={styles.HistoryEntryContainer}>
      <div className={styles.HistoryEntry}>
        <img
          className={styles.HistoryIcon}
          src={entry.iconURL}
          alt={entry.iconAlt}
        />
        <a className={styles.HistoryLink} href={entry.contentURL}>
          <p className={styles.HistoryContent}>{entry.content}</p>
        </a>
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
      <div>
        <Moment
          onChange={val => {
            console.log(val)
          }}
        >
          H HH
        </Moment>
      </div>
    </section>
  )
}

export default history
