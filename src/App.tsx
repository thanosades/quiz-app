import { useState } from 'react';
import StartPage from 'components/StartPage';
import Question from 'components/Question';
import Results from 'components/Results';
import { QuestionType } from 'types';
import 'App.scss';

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const startGame = (questionsArr: QuestionType[]) => {
    setQuestions(questionsArr);
  }

  const resetGame = () => {
    setQuestions([]);
    setScore(0);
    setIndex(0);
  };

  const handleScoreState = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(oldScore => oldScore + 1);
    }
    setIndex(previous => previous + 1);
  };

  const currentQuestion: QuestionType = questions[index];

  return (
    <div className="App">
      {
        questions.length === 0
          ? <StartPage startGame={startGame} />
          : index < 10
            ? <Question currentQuestion={currentQuestion} handleScoreState={handleScoreState} />
            : <Results score={score} resetGame={resetGame} />
      }
    </div>
  );
}

export default App;
