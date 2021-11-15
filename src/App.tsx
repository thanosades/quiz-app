import { useReducer } from 'react';
import StartPage from 'components/StartPage';
import Question from 'components/Question';
import Results from 'components/Results';
import { QuestionType } from 'types';
import 'App.scss';

interface QuizState {
  questions: QuestionType[];
  score: number;
  index: number;
}

type ActionType =
  | { type: 'quiz/start'; payload: QuestionType[] }
  | { type: 'quiz/reset' }
  | { type: 'quiz/answer'; payload: boolean };

const initialState = {
  questions: [],
  score: 0,
  index: 0,
};

function reducer(state: QuizState, action: ActionType) {
  switch (action.type) {
    case 'quiz/start':
      return {
        ...state,
        questions: action.payload,
      };
    case 'quiz/reset':
      return initialState;
    case 'quiz/answer':
      const currentState = { ...state };
      if (action.payload) {
        currentState.score += 1;
      }
      currentState.index += 1;
      return currentState;
    default:
      throw new Error();
  }
}

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startGame = (questionsArr: QuestionType[]) => {
    dispatch({ type: 'quiz/start', payload: questionsArr });
  };

  const resetGame = () => {
    dispatch({ type: 'quiz/reset' });
  };

  const handleScoreState = (isCorrect: boolean) => {
    dispatch({ type: 'quiz/answer', payload: isCorrect });
  };

  const { questions, score, index } = state;

  const currentQuestion: QuestionType = questions[index];

  return (
    <div className="App">
      {questions.length === 0 ? (
        <StartPage startGame={startGame} />
      ) : index < 10 ? (
        <Question
          currentQuestion={currentQuestion}
          handleScoreState={handleScoreState}
          number={index + 1}
        />
      ) : (
        <Results score={score} resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
