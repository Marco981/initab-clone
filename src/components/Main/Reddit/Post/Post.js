import React from 'react'
import styles from './Post.module.css'

const post = props => (
  <a href={props.link_content} className={styles.Post}>
    <h6 className={styles.Content}>{props.content}</h6>
    <p className={styles.PostedBy}>
      Posted by: <span className={styles.User}>{props.user}</span>
    </p>
    <p className={styles.Score}>Reddit Score: {props.score}</p>
    <a className={styles.CommentLink} href={props.link_comment}>
      Link to Comments
    </a>
  </a>
)

export default post
