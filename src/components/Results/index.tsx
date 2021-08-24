interface ResultsProps {
  score: number;
  resetGame: () => void;
}

export default function Results({ score, resetGame }: ResultsProps) {
  return (
    <div>
      <h1>Results</h1>
      <p>Your score is {score}</p>
      <button onClick={() => resetGame()}>start over</button>
    </div>
  );
}
