import 'components/Results/index.scss';

interface ResultsProps {
  score: number;
  resetGame: () => void;
}

export default function Results({ score, resetGame }: ResultsProps) {
  return (
    <div className="results">
      <h1>Game Over</h1>
      <p>Your score was {score}/10</p>
      <button className="btn-hover" onClick={resetGame}>
        start over
      </button>
    </div>
  );
}
