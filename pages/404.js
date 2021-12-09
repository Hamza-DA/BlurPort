import styles from '.././styles/404.module.scss';
import Link from 'next/link';
export default function c404() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.error}>
          <div className={styles.text}>
            <h1 className={`${styles.error_message} `}>
              Congratulations, you broke the internet!
            </h1>
            <p className='tiny_p'>
              jk lol, the page you are looking for is not available, here some
              that are :
            </p>
            <ul className={styles.nav}>
              <li>
                <Link href='/'>
                  <a className={`link_btn`}>&#127968; home</a>
                </Link>
              </li>
              <li>
                <Link href='/work'>
                  <a className={`link_btn`}>
                    &#128104;&#127995;&#8205;&#127912; work
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h1 className={`${styles.error_code} gradient_text`}>404</h1>
        </div>
      </section>
    </>
  );
}
