import React, { Component } from 'react'
import styles from './Reddit.module.css'
import { FaRedditAlien } from 'react-icons/fa'
import Post from './Post/Post'

class Reddit extends Component {
  state = {
    posts: [
      {
        content: 'WebGL Fluid Simulation',
        user: 'u/magenta_placenta',
        score: 546,
        link_content: 'https://paveldogreat.github.io/WebGL-Fluid-Simulation/',
        link_comment:
          'http://reddit.com/r/javascript/comments/br16u9/webgl_fluid_simulation/'
      },
      {
        content: 'Learn: Creational Patterns in ES6+ using Game of Thrones',
        user: 'u/thecreazy',
        score: 3,
        link_content:
          'https://medium.com/javascript-by-doing/learn-creational-patterns-in-es6-using-game-of-thrones-4444119cda84',
        link_comment:
          'http://reddit.com/r/javascript/comments/br734s/learn_creational_patterns_in_es6_using_game_of/'
      },
      {
        content: 'React Hooks – Learn by building a Notes app',
        user: 'u/R0rshrk',
        score: 7,
        link_content:
          'https://blog.flexiple.com/react-hooks-learn-by-building-a-notes-app/',
        link_comment:
          'http://reddit.com/r/javascript/comments/br5u93/react_hooks_learn_by_building_a_notes_app/'
      },
      {
        content:
          'A lightweight starting template to use Typescript with ExpressJS with no bells and whistles.',
        user: 'u/textreturns',
        score: 4,
        link_content:
          'https://github.com/akhilrex/typescript-express-starter-template',
        link_comment:
          'http://reddit.com/r/javascript/comments/br73oa/a_lightweight_starting_template_to_use_typescript/'
      },
      {
        content: 'Strict mode in JavaScript',
        user: 'u/tvthatsme',
        score: 0,
        link_content: 'https://tvernon.tech/blog/javascript-strict-mode',
        link_comment:
          'http://reddit.com/r/javascript/comments/br9911/strict_mode_in_javascript/'
      },
      {
        content: 'Python-like list/array operator in JavaScript',
        user: 'u/EvoNext',
        score: 1,
        link_content:
          'https://medium.com/@kulak/python-like-list-array-operator-in-javascript-1f17aea32ed2?source=friends_link&amp;sk=46eb6c92eea0915a843533cd88f74bef',
        link_comment:
          'http://reddit.com/r/javascript/comments/br970j/pythonlike_listarray_operator_in_javascript/'
      },
      {
        content: 'Fetch vs Axios.js for making HTTP requests',
        user: 'u/renishb',
        score: 0,
        link_content:
          'https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5',
        link_comment:
          'http://reddit.com/r/javascript/comments/br7rdg/fetch_vs_axiosjs_for_making_http_requests/'
      }
    ]
  }
  render () {
    const posts = this.state.posts.map((post, index) => (
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
