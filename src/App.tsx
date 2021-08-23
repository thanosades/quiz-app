import StartPage from './components/StartPage';
import { Difficulty, Category } from './components/StartPage';
import './App.css';

function App() {

  const startGame = (difficulty: Difficulty, category: Category) => {
    console.log('GAME STARTS!');
    console.log('difficulty', difficulty);
    console.log('category', category);
  }

  return (
    <div className="App">
      <StartPage startGame={startGame} />
    </div>
  );
}

export default App;
