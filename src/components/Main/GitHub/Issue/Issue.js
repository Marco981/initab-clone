import React from 'react'
import styles from './Issue.module.css'

const issue = props => (
  <li>
    <a className={styles.IssueLink} href={props.url}>
      <p className={styles.IssueTitle}>Repo: {props.repo}</p>
      <p className={styles.IssueNumber}>Issue #{props.number}</p>
      <p>{props.content}</p>
    </a>
  </li>
)

export default issue
