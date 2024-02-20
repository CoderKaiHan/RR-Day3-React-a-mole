import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = () => {
    setGameStarted(true); 
  };

  const createMoleHill = () => {
    document.title = 'React-a-Mole!';

    let hills = [];
    for (let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer key= '' setScore={setScore} score = {score}/>
      )
    }

    return (
      <div>
        {hills}
      </div>
    );
  }
  

  return (
    <div className="App">
        <h1>React-a-Mole!</h1>
        {score}
        {!gameStarted && <button onClick={startGame} className='App-button'>Start Game</button>}
        {gameStarted && createMoleHill()}
    </div>
  );
}

export default App;
