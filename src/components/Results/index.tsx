import 'components/Results/index.scss';

interface ResultsProps {
  score: number;
  resetGame: () => void;
}

export default function Results({ score, resetGame }: ResultsProps) {
  return (
    <div className='results'>
      <h1>Results</h1>
      <p>Your final score is {score}/10</p>
      <button onClick={resetGame}>start over</button>
    </div>
  );
}
