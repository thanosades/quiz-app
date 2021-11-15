import { QuestionType } from 'globalTypes';
import 'components/Question/index.scss';
import { useEffect, useState } from 'react';

interface QuestionProps {
  number: number;
  currentQuestion: QuestionType;
  handleScoreState: (isCorrect: boolean) => void;
}

export default function Question({
  number,
  currentQuestion,
  handleScoreState,
}: QuestionProps): JSX.Element {
  const { question, answers } = currentQuestion;
  const [chosenAnswer, setChosenAnswer] = useState('');

  const handleUserChoice = (answer: typeof answers[number]) => {
    setChosenAnswer(answer.text);
    setTimeout(() => {
      handleScoreState(answer.isCorrect);
    }, 1500);
  };

  useEffect(() => {
    setChosenAnswer('');
  }, [question]);

  return (
    <div className="question">
      <h3>Question {number}:</h3>
      <h3> {question}</h3>
      <div className="answersFlex">
        {answers.map((answer) => (
          <button
            key={answer.text}
            className={Boolean(chosenAnswer) ? '' : 'btn-hover'}
            onClick={() => handleUserChoice(answer)}
            disabled={Boolean(chosenAnswer)}
            style={
              answer.text === chosenAnswer
                ? { backgroundColor: answer.isCorrect ? 'green' : 'red' }
                : {}
            }
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
