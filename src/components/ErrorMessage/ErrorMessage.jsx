import styles from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return <p className={styles.message}>Oops... Something went wrong...</p>;
}
