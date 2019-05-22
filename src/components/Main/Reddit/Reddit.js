import React, { Component } from 'react'
import styles from './Reddit.module.css'
import { FaRedditAlien } from 'react-icons/fa'
import Post from './Post/Post'

class Reddit extends Component {
  render () {
    const posts = this.props.posts.map((post, index) => (
      <Post
        key={index}
        content={post.content}
        user={post.user}
        score={post.score}
        link_content={post.link_content}
        link_comment={post.link_comment}
      />
    ))
    return (
      <section className={styles.Reddit}>
        <h6 className={styles.Title}>
          <FaRedditAlien style={{ marginRight: '.5rem' }} />
          popular on r/javascript
        </h6>
        {posts}
      </section>
    )
  }
}

export default Reddit
