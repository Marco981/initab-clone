import React, { Component } from 'react'
import styles from './History.module.css'
import { FaHistory } from 'react-icons/fa'

const DATE = Date.now()

class History extends Component {
  state = {
    time: DATE
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ time: DATE })
    }, 3000)
  }

  formatAMPM = () => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'

    hours = hours % 12
    hours = hours || 12
    minutes = `0${minutes}`.slice(-2)
    const strTime = `${hours}:${minutes}`
    return [strTime, ampm]
  }

  render () {
    const date = Date(this.state.time.toString()).split(' ')
    const dateString = `${date[1]} ${date[2]}, ${date[3]}`
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
            {this.formatAMPM()[0]}
            <span className={styles.HourCycle}>
              {this.formatAMPM()[1]}
              <h5 className={styles.Date}>{dateString}</h5>
            </span>
          </h2>
        </div>
      </section>
    )
  }
}

export default History
