import React from 'react'
import styles from './Extra.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { concert, realmadrid, plane } from '../images/extra'

const Extra = () => (
  <div className={styles.aboutExtra}>
    <h2>When I'm not coding, you can find me...</h2>

    <div className={styles.extrasContainer}>
      <div className={styles.extra}>
        <img src={realmadrid} />
        <p>Watching soccer <FontAwesomeIcon icon="coffee" /></p>
      </div>

      <div className={styles.extra}>
        <img src={concert} />
        <p>At a concert</p>
      </div>

      <div className={styles.extra}>
        <img src={plane} />
        <p>Visiting friends</p>
      </div>
    </div>
  </div>
)

export default Extra
