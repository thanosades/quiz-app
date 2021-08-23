import React, { useState } from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = '9' | '15' | '14' | '31';

export default function StartPage({ startGame }: { startGame: (difficulty: Difficulty, category: Category) => void}) {
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [category, setCategory] = useState<Category>('15');

    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDifficulty(e.currentTarget.value as Difficulty);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Category);
    };
    
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        startGame(difficulty, category);
    }

    return (
        <div>
            <h1>Welcome to the Open Trivia Quiz!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="difficulty">Select difficulty</label>
                <select id='difficulty' value={difficulty} onChange={handleDifficultyChange}>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>

                <label htmlFor='category'>Select category:</label>
                <select id='category' value={category} onChange={handleCategoryChange}>
                    <option value='15'>Video Games</option>
                    <option value='14'>Entertainment: Television</option>
                    <option value='31'>Anime & Manga</option>
                    <option value='9'>General Knowledge</option>
                </select>

                <button>Start</button>
            </form>
        </div>
    );
}