import React, { Fragment } from 'react'
import styles from './Post.module.css'

const post = props => (
  <Fragment>
    <a href={props.link_content} className={styles.Post}>
      <h6 className={styles.Content}>{props.content}</h6>
      <p className={styles.PostedBy}>
        Posted by: <span className={styles.User}>{props.user}</span>
      </p>
      <p className={styles.Score}>Reddit Score: {props.score}</p>
    </a>
    <a className={styles.CommentLink} href={props.link_comment}>
      Link to Comments
    </a>
  </Fragment>
)

export default post
