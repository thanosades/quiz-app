export type Difficulty = 'easy' | 'medium' | 'hard';
export enum Category {
  GeneralKnowledge = '9',
  Computers = '18',
  Film = '11',
  Television = '14',
  VideoGames = '15',
  AnimeManga = '31',
}
export type Answer = { text: string; isCorrect: boolean };
export type QuestionType = { question: string; answers: Answer[] };
