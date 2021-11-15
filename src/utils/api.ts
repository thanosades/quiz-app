import { Category, Difficulty, QuestionType, Answer } from 'globalTypes';

interface FetchedQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface OpenTriviaDB {
  response_code: number;
  results: FetchedQuestion[];
}

export default async function getQuestions(
  category: Category,
  difficulty: Difficulty,
): Promise<QuestionType[]> {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;
  const res: OpenTriviaDB = await (await fetch(url)).json();
  const processedQuestions = processResults(res.results);
  return processedQuestions;
}

function questionFormatter(answersArr: string[]): Answer[] {
  return answersArr.map((answer, index) => {
    const text = decodeURIComponent(answer);
    return { text, isCorrect: index === 0 };
  });
}

function shuffle(array: Answer[]): Answer[] {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function processResults(results: FetchedQuestion[]): QuestionType[] {
  return results.map((current) => ({
    question: decodeURIComponent(current.question),
    answers: shuffle(questionFormatter([current.correct_answer, ...current.incorrect_answers])),
  }));
}
