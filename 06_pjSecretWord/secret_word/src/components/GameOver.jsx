import styles from './GameOver.module.css'

import React from 'react'

function GameOver(props) {
  return (
    <div>
        <h1>Game Over</h1>
        <p>Você fez <span className={styles.score}>{props.score}</span> pontos.</p>
        <button onClick={props.retry}>Tentar novamente</button>
    </div>
  )
}

export default GameOver