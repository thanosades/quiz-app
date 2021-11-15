import 'components/Footer/index.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <p>
        Powered by <a href="http://opentdb.com/">Open Trivia database</a>
      </p>
      <p>
        Made by <a href="http://thanosades.vercel.app/">Thanos Dimitriades</a>, 2021
      </p>
    </footer>
  );
}
