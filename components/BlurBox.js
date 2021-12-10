import styles from '../styles/BlurBox.module.scss';
export default function BlurBox() {
  return (
    <div className={styles.blur_border}>
      <div className={`${styles.box} gradient_border`}>
        {/* <div className={styles.colors}>
          <span className={styles.red}></span>
          <div className={styles.vb_flex}>
            <span className={styles.violet}></span>
            <span className={styles.blue}></span>
          </div>
        </div> */}
        <span className={styles.colors}></span>
      </div>
      <span className={styles.before}></span>
    </div>
  );
}
