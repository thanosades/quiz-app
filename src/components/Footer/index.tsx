import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright {new Date().getUTCFullYear()}, Thanos Dimitriades</p>
    </div>
  );
}