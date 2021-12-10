import styles from '../../styles/BlurBoxContainer.module.scss';
import BlurBox from './BlurBox';
export default function BlurBoxContainer({ children }) {
  return (
    <>
      <section className={styles.blur_container}>
        <div className={styles.A}>{children}</div>
        <div className={styles.B}>
          <BlurBox />
        </div>
      </section>
    </>
  );
}
