import { Question as QuestionType } from "../../types";
import css from './index.module.scss';

interface QuestionProps {
  currentQuestion: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

export default function Question({ currentQuestion, handleAnswer }: QuestionProps) {

  const { question, answers } = currentQuestion;
  return (
    <div className={css.question}>
      <h2>{question}</h2>
      <div className={css.answersFlex}>
        {answers.map(answer =>
          <button 
            key={answer.text} 
            onClick={() => handleAnswer(answer.isCorrect)}
            className={css.answerBtn}
          >{answer.text}</button>
        )}
      </div>
    </div>
  );
}
