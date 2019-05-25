import React from 'react'
import styles from './GitHub.module.css'
import { FaGithubAlt } from 'react-icons/fa'
import Issue from './Issue/Issue'

const gitHub = props => {
  const issues = props.issues.map((issue, index) => (
    <Issue
      key={index}
      repo={issue.repo}
      number={issue.number}
      content={issue.content}
      url={issue.url}
    />
  ))
  return (
    <div className={styles.GitHub}>
      <h6 className={styles.Title}>
        <FaGithubAlt style={{ marginRight: '.5rem' }} />
        github issues history
      </h6>
      <a className={styles.GitlabLink} href='/'>
        switch to gitlab
      </a>
      <div className={styles.SwitchContainer}>
        <a className={styles.SwitchActive} href='/'>
          issues
        </a>
        <a className={styles.Switch} href='/'>
          pull requests
        </a>
      </div>
      <ul className={styles.IssuesContainer}>{issues}</ul>
    </div>
  )
}

export default gitHub
