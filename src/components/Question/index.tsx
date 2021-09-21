import { QuestionType } from "types";
import 'components/Question/index.scss';

interface QuestionProps {
  currentQuestion: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

export default function Question({ currentQuestion, handleAnswer }: QuestionProps) {
  const { question, answers } = currentQuestion;
  return (
    <div className='question'>
      <h2>{question}</h2>
      <div className='answersFlex'>
        {answers.map(answer =>
          <button 
            key={answer.text} 
            onClick={() => handleAnswer(answer.isCorrect)}
          >{answer.text}</button>
        )}
      </div>
    </div>
  );
}
