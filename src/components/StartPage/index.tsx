import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import ErrorComponent from 'components/ErrorComponent';
import getQuestions from 'utils/api';
import { Category, Difficulty, QuestionType } from 'globalTypes';
import 'components/StartPage/index.scss';

export default function StartPage({
  startGame,
}: {
  startGame: (questions: QuestionType[]) => void;
}) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [category, setCategory] = useState<Category>(Category.GeneralKnowledge);
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
        .then((data) => {
          setLoader(false);
          startGame(data);
        })
        .catch(() => setError(true));
    }
  }, [start, category, difficulty, startGame]);

  return (
    <>
      {loader && (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
      {!loader && (
        <div>
          <h1>Ten Questions</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="difficulty">Choose Difficulty</label>
            <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <label htmlFor="category">Choose Category</label>
            <select id="category" value={category} onChange={handleCategoryChange}>
              <option value={Category.GeneralKnowledge}>General Knowledge</option>
              <option value={Category.Computers}>Computers</option>
              <option value={Category.Film}>Entertainment: Film</option>
              <option value={Category.Television}>Entertainment: Television</option>
              <option value={Category.VideoGames}>Video Games</option>
              <option value={Category.AnimeManga}>Anime &amp; Manga</option>
            </select>

            <button className="btn-hover">Start</button>
          </form>
          {error && <ErrorComponent />}
          <Footer />
        </div>
      )}
    </>
  );
}
