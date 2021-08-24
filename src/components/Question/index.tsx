import { Question as QuestionType } from "../../types";

interface QuestionProps {
  currentQuestion: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

export default function Question({ currentQuestion, handleAnswer }: QuestionProps) {

  const { question, answers } = currentQuestion;
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {answers.map(answer =>
          <button key={answer.text} onClick={() => handleAnswer(answer.isCorrect)}>{answer.text}</button>
        )}
      </div>
    </div>
  );
}
