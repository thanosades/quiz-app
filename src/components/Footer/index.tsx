import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
      <p>Powered by <a href="http://opentdb.com/">Open Trivia database</a></p>
      <p>Copyright {new Date().getUTCFullYear()}, Thanos Dimitriades</p>
    </div>
  );
}