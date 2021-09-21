import 'components/Footer/index.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Powered by <a href="http://opentdb.com/">Open Trivia database</a></p>
      <p>Copyright {new Date().getUTCFullYear()}, Thanos Dimitriades</p>
    </footer>
  );
}