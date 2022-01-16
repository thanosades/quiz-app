import 'components/Loader/index.scss';

export default function Spinner() {
  return (
    <>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </>
  );
}
