import React from 'react'
import styles from './Navigation.module.css'
import {
  FaWrench,
  FaCode,
  FaStackOverflow,
  FaChartLine,
  FaPencilAlt,
  FaLightbulb,
  FaQuestion,
  FaLock,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien
} from 'react-icons/fa'

const navigation = props => (
  <div className={styles.Navigation}>
    <ul className={styles.Navigation__linksContainer}>
      <li className={styles.Navigation__listItem}>
        <button
          className={[
            styles.Navigation__link,
            styles.Navigation__settings
          ].join(' ')}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaWrench />
          </div>
          settings
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[styles.Navigation__link, styles.Navigation__gists].join(
            ' '
          )}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaCode />
          </div>
          gists
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[
            styles.Navigation__link,
            styles.Navigation__stackOverflow
          ].join(' ')}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaStackOverflow />
          </div>
          stack overflow
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[
            styles.Navigation__link,
            styles.Navigation__trending
          ].join(' ')}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaChartLine />
          </div>
          trending
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[
            styles.Navigation__link,
            styles.Navigation__scratchPad
          ].join(' ')}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaPencilAlt />
          </div>
          scratch pad
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[
            styles.Navigation__link,
            styles.Navigation__playground
          ].join(' ')}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaLightbulb />
          </div>
          playground{' '}
          <span style={{ paddingLeft: '.3rem' }}>
            <FaLock />
          </span>
        </button>
      </li>
      <li className={styles.Navigation__listItem}>
        <button
          className={[styles.Navigation__link, styles.Navigation__help].join(
            ' '
          )}
        >
          <div className={styles.Navigation__iconContainer}>
            <FaQuestion />
          </div>
          help/intro
        </button>
      </li>
    </ul>
    <div style={{ textAlign: 'center' }}>
      <svg
        className={styles.Navigation__logo}
        xmlns='http://www.w3.org/2000/svg'
        width='492px'
        height='144px'
        viewBox='0 0 492 144'
        version='1.1'
        data-src='img/initab_logo.svg'
      >
        <defs />
        <g
          id='Page-1'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
        >
          <g id='Group-5' fill=''>
            <path
              d='M81.2656922,13 L54.460381,13 C50.6405214,13 47.1543546,15.1761068 45.4765914,18.6077883 L1.96412484,107.607788 C1.29548278,108.975423 0.947914466,110.477664 0.947914466,112 C0.947914466,117.522847 5.42506697,122 10.9479145,122 L40.9277073,122 L81.2656922,13 Z'
              id='Combined-Shape'
            />
            <path
              d='M464.927011,21.1855043 L464.927011,10 C464.927011,4.4771525 460.449858,-1.01437955e-15 454.927011,0 L100.889084,0 C96.7048022,-2.94762045e-15 92.9629247,2.60512247 91.5106889,6.52930689 L45.6216052,130.529307 C45.2104727,131.640256 45,132.815417 45,134 C45,139.522847 49.4771525,144 55,144 L454.927011,144 C460.449858,144 464.927011,139.522847 464.927011,134 L464.927011,122.814496 C464.30346,122.93622 463.659178,123 463,123 L126,123 C120.477153,123 116,118.522847 116,113 L116,31 C116,25.4771525 120.477153,21 126,21 L463,21 C463.659178,21 464.30346,21.0637796 464.927011,21.1855043 Z'
              id='Combined-Shape'
            />
            <path
              d='M136.232,45.736 L136.232,100 L143.452,100 L143.452,45.736 L136.232,45.736 Z M162.436,45.736 L162.436,100 L169.276,100 L169.276,56.452 L169.428,56.452 L197.776,100 L205.68,100 L205.68,45.736 L198.84,45.736 L198.84,89.74 L198.688,89.74 L170.112,45.736 L162.436,45.736 Z M224.588,45.736 L224.588,100 L231.808,100 L231.808,45.736 L224.588,45.736 Z M263.18,51.816 L245.092,51.816 L245.092,45.736 L288.488,45.736 L288.488,51.816 L270.4,51.816 L270.4,100 L263.18,100 L263.18,51.816 Z M303.748,77.58 L322.14,77.58 L313.096,52.272 L312.944,52.272 L303.748,77.58 Z M309.144,45.736 L317.124,45.736 L338.328,100 L330.348,100 L324.42,83.66 L301.468,83.66 L295.388,100 L288.016,100 L309.144,45.736 Z M357.768,69.068 L372.208,69.068 C376.312021,69.068 379.263325,68.3460072 381.062,66.902 C382.860676,65.4579928 383.76,63.2920144 383.76,60.404 C383.76,58.478657 383.456004,56.9586722 382.848,55.844 C382.239997,54.7293278 381.404006,53.868003 380.34,53.26 C379.275995,52.651997 378.047341,52.2593342 376.654,52.082 C375.26066,51.9046658 373.778675,51.816 372.208,51.816 L357.768,51.816 L357.768,69.068 Z M350.548,45.736 L370.232,45.736 C371.39734,45.736 372.651327,45.7486665 373.994,45.774 C375.336674,45.7993335 376.666661,45.8753327 377.984,46.002 C379.30134,46.1286673 380.529995,46.3186654 381.67,46.572 C382.810006,46.8253346 383.78533,47.2053308 384.596,47.712 C386.369343,48.7760053 387.876661,50.245324 389.118,52.12 C390.35934,53.994676 390.98,56.2999863 390.98,59.036 C390.98,61.9240144 390.283341,64.4193228 388.89,66.522 C387.49666,68.6246772 385.508013,70.1826616 382.924,71.196 L382.924,71.348 C386.268017,72.0573369 388.826658,73.5773217 390.6,75.908 C392.373343,78.2386783 393.26,81.0759833 393.26,84.42 C393.26,86.3960099 392.905337,88.321324 392.196,90.196 C391.486664,92.070676 390.435341,93.7299928 389.042,95.174 C387.64866,96.6180072 385.926011,97.7833289 383.874,98.67 C381.82199,99.5566711 379.453347,100 376.768,100 L350.548,100 L350.548,45.736 Z M357.768,93.92 L375.856,93.92 C379.048016,93.92 381.543325,93.0586753 383.342,91.336 C385.140676,89.6133247 386.04,87.2320152 386.04,84.192 C386.04,82.4186578 385.71067,80.9493392 385.052,79.784 C384.393331,78.6186608 383.519339,77.6940034 382.43,77.01 C381.340662,76.3259966 380.086674,75.8446681 378.668,75.566 C377.249327,75.2873319 375.780008,75.148 374.26,75.148 L357.768,75.148 L357.768,93.92 Z'
              id='INITAB'
            />
            <path
              d='M454,67 L454,48 L446,48 L446,67 L427,67 L427,75 L446,75 L446,94 L454,94 L454,75 L473,75 L473,67 L454,67 Z M419,31 L482,31 C487.522847,31 492,35.4771525 492,41 L492,104 C492,109.522847 487.522847,114 482,114 L419,114 C413.477153,114 409,109.522847 409,104 L409,41 L409,41 C409,35.4771525 413.477153,31 419,31 L419,31 Z'
              id='Combined-Shape'
            />
          </g>
        </g>
      </svg>
      <ul className={styles.socialContainer}>
        <li className={[styles.socialItem, styles.facebook].join(' ')}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'flex' }}
            href='https://www.facebook.com/'
          >
            <FaFacebookF />
          </a>
        </li>
        <li className={[styles.socialItem, styles.linkedin].join(' ')}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'flex' }}
            href='https://www.linkedin.com'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className={[styles.socialItem, styles.twitter].join(' ')}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'flex' }}
            href='https://www.twitter.com'
          >
            <FaTwitter />
          </a>
        </li>
        <li className={[styles.socialItem, styles.reddit].join(' ')}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'flex' }}
            href='https://www.reddit.com'
          >
            <FaRedditAlien />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default navigation
