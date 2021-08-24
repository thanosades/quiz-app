export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = '9' | '15' | '14' | '31';
export type Answer = { text: string, isCorrect: boolean };
export type Question = { question: string, answers: Answer[] };