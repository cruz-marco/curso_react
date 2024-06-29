import styles from './StartScreen.module.css'

function StartScreen({func, startGame}) {
  return (
    <div className={styles.mainDiv}>
        <h1 className={styles.h1}>Palavra Secreta</h1>
        <p>paragrafos</p>
        <button className={styles.button} onClick={startGame}>Clique aqui para começar!</button>
    </div>
  )
}

export default StartScreen