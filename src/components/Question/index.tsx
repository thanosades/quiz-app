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
  const [seconds, setSeconds] = useState(0);

  const handleUserChoice = (answer: typeof answers[number]) => {
    setChosenAnswer(answer.text);
    setSeconds(3);
    setTimeout(() => {
      handleScoreState(answer.isCorrect);
    }, 3000);
  };

  useEffect(() => {
    setChosenAnswer('');
  }, [question]);

  useEffect(() => {
    if (seconds === 0) return;
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

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
      <div>{seconds !== 0 ? `Next question in ${seconds} seconds` : ''}</div>
    </div>
  );
}
