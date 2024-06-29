import styles from './GameOver.module.css'

import React from 'react'

function GameOver() {
  return (
    <div>
        <h1>Game Over</h1>
        <button className={styles.button}>Reset</button>
    </div>
  )
}

export default GameOver