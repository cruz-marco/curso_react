import styles from './Game.module.css'

import React from 'react'

function Game() {
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: 0000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className={styles.tip}>Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className={styles.wordContainer}>
        <span className={styles.letter}>A</span>
        <span className={styles.blankSquare}></span>
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma letra da palavra.</p>
        <form>
          <input type="text" name="letter" id="letter" maxLength='1' required/>
          <button>Advinhar</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game