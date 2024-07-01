import styles from './Game.module.css'

import React, { useState, useRef } from 'react'

function Game(props) {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault()

    props.verifyLetter(letter)
    setLetter('')

    letterInputRef.current.focus()
  }

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {props.score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className={styles.tip}>Dica sobre a palavra: <span>{props.pickedCategory}</span>.
      </h3>
      <div className={styles.wordContainer}>
          {props.letters.map((letter, i) => (
            props.guessedLetters.includes(letter) ? 
            (<span key={i} className={styles.letter}>{letter}</span>) : 
            (<span key={i} className={styles.blankSquare}></span>)
          ))}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma letra da palavra.</p><br />
        <p>Você ainda tem {props.guesses} tentativas.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter"
           id="letter" maxLength='1' required
           onChange={(e) => {
            setLetter(e.target.value)
           }}
           ref={letterInputRef}
           value={letter}/>
          <button type='submit'>Tentar</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <h3>Letras já utilizadas:</h3>
        <p>
          {props.wrongLetters.map((letter, i) => (
            <span key={i+10}>{letter},</span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Game