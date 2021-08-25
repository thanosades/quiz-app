import styles from './index.module.scss';

export default function Spinner() {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
} 