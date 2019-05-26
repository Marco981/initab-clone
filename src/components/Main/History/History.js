import React, { Component } from 'react'
import styles from './History.module.css'
import { FaHistory } from 'react-icons/fa'

const DATE = new Date()

const INITIALTIME = DATE.toLocaleTimeString('default', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
})

const splitDate = DATE.toString().split(' ')

const NEWDATE = `${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`

class History extends Component {
  state = {
    time: INITIALTIME,
    date: NEWDATE
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      return this.handleTime(new Date())
    }, 10000)
  }

  handleTime = date => {
    const newTime = date.toLocaleTimeString('default', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    this.setState({ time: newTime })
  }

  // handleDate =

  render () {
    const entries = this.props.entries.map((entry, index) => (
      <li key={index} className={styles.HistoryEntryContainer}>
        <div className={styles.HistoryEntry}>
          <img
            className={styles.HistoryIcon}
            src={entry.iconURL}
            alt={entry.iconAlt}
          />
          <a className={styles.HistoryLink} href={entry.contentURL}>
            {entry.content}
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
        <div className={styles.TimeSection}>
          <h2 className={styles.Time}>
            {this.state.time.split(' ')[0]}
            <span className={styles.HourCycle}>
              {this.state.time.split(' ')[1]}
              <h5 className={styles.Date}>{this.state.date}</h5>
            </span>
          </h2>
        </div>
      </section>
    )
  }
}

export default History
