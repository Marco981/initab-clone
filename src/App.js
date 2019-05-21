import React from 'react'
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'

function App () {
  return (
    <div className={styles.App}>
      <Navigation />
      <Main />
    </div>
  )
}

export default App
