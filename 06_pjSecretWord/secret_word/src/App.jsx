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

  function startGame () {
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

