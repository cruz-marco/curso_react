//CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from 'react';

//COPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//DATA
import {wordList} from './data/data'

const GUESSNUM = 5
const stages = [
  {id: 1, name:'start'},
  {id: 2, name:'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(GUESSNUM)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //Escolhendo a categoria
    const category = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]

    //Escolhendo a Palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return [ word, category ]
  }, [words])

  const startGame = useCallback(() => {
    // Obtendo os dados
    const [word, category] = pickWordAndCategory()
    const wordLetters = word.toLowerCase().split('')

    clearLetterStates()

    // Iniciando os States
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  function clearLetterStates() {
    setGuessedLetters([])
    setWrongLetters([])
  }

  function verifyLetter (letter) {
    const normalizedLetter= letter.toLowerCase()

    //check if letter has been typed
    if (guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)){
        return null;
      }

    //push a guessed letter or remove a chance
    if (letters.includes(normalizedLetter)){
      setGuessedLetters([...guessedLetters, normalizedLetter])
      setScore(score + 1)
    } else {
      setWrongLetters([...wrongLetters, normalizedLetter])
      setGuesses(guesses - 1)
    }
  }

  function retry() {
    setScore(0)
    setGuesses(GUESSNUM)

    setGameStage(stages[0].name)
  }

  //checks if player have enough guesses.
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]/*transforma o array em conjunto,
     eliminando as letras repetidas*/    

    //win condition
    if (guessedLetters.length === uniqueLetters.length){
      setScore(score + 5)

      startGame()
    }
  },[guessedLetters, letters, startGame])
  

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}

      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score} />}

      {gameStage === 'end' && <GameOver
       retry={retry}
       score={score}/>}      
    </div>
  )
}

export default App

//const [stageControl, setStageControl] = useState(1)
/*function handleStages() {    
    if (stageControl < stages.length - 1){
      setStageControl(stageControl + 1)
    } else {
      setStageControl(0)
    }
    setGameStage(stages[stageControl].name)
  }*/

