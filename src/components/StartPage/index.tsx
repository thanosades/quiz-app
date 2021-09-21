import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import ErrorComponent from 'components/ErrorComponent';
import getQuestions from 'utils/api';
import { Category, Difficulty, QuestionType } from 'types';
import 'components/StartPage/index.scss';

export default function StartPage({ startGame }: { startGame: (questions: QuestionType[]) => void }) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [category, setCategory] = useState<Category>('15');
  const [start, setStart] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.currentTarget.value as Difficulty);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Category);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoader(true);
    setStart(true);
  };

  useEffect(() => {
    if (start) {
      getQuestions(category, difficulty)
        .then(data => {
          setLoader(false);
          startGame(data)
        })
        .catch(err => setError(true))
    }
  }, [start, category, difficulty, startGame]);


  return (
    <>
      {loader && <div className='loaderContainer'><Loader /></div>}
      {!loader && (
        <div>
          <h1>Ten Questions</h1>
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
          {error && <ErrorComponent />}
          <Footer />
        </div>
      )}
    </>
  )
}