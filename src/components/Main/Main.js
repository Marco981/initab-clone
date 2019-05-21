import React from 'react'
import styles from './Main.module.css'
import Reddit from './Reddit/Reddit'
import History from './History/History'
import GitHub from './GitHub/GitHub'

const main = props => (
  <main className={styles.Main}>
    <Reddit />
    <History />
    <GitHub />
  </main>
)

export default main
