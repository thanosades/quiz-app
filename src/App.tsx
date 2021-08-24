import { useState } from 'react';
import StartPage from './components/StartPage';
import { Question as QuestionType } from './types';
import Question from './components/Question';
import './App.css';

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  
  const startGame = (questionsArr: QuestionType[]) => {
    setQuestions(questionsArr);
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(oldScore => oldScore + 1);
    }
    setIndex(previous => previous + 1);    
  }

  const currentQuestion: QuestionType = questions[index];

  return (
    <div className="App">
      {questions.length === 0 && <StartPage startGame={startGame} />}
      {(questions.length > 0 && index < 10) && <Question currentQuestion={currentQuestion} handleAnswer={handleAnswer} />}
    </div>
  );
}

export default App;
