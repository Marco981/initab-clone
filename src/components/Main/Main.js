import React, { Component } from 'react'
import axios from 'axios'
import styles from './Main.module.css'
import Reddit from './Reddit/Reddit'
import History from './History/History'
import GitHub from './GitHub/GitHub'

class Main extends Component {
  state = {
    reddit: [],
    history: [],
    gitHub: []
  }

  componentDidMount () {
    axios
      .get('/data.json')
      .then(response => {
        const posts = response.data
        this.setState({
          ...posts
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <main className={styles.Main}>
        <Reddit posts={this.state.reddit} />
        <History entries={this.state.history} />
        <GitHub issues={this.state.gitHub} />
      </main>
    )
  }
}

export default Main
