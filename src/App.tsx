import { useState } from 'react';
import StartPage from './components/StartPage';
import { Question } from './types';
import './App.css';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const startGame = (questionsArr: Question[]) => {
    setQuestions(questionsArr);
  }

  return (
    <div className="App">
      {questions.length === 0 && <StartPage startGame={startGame} />}
      {questions.length > 0 && <p>Questions are running</p>}
    </div>
  );
}

export default App;
