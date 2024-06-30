//CSS
import './App.css';

//REACT
import { useCallback, useState } from 'react';

//COPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//DATA
import {wordList} from './data/data'


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

  function pickWordAndCategory () {
    //Escolhendo a categoria
    const category = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]

    //Escolhendo a Palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return [ word, category ]
  }

  function startGame () {
    // Obtendo os dados
    const [word, category] = pickWordAndCategory()
    const wordLetters = word.toLowerCase().split('')

    // Inisiando os States
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}      
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

