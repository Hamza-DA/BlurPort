import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/dist/client/router';
export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <svg
        className={styles.logo}
        width='65'
        height='28'
        viewBox='0 0 65 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.0939 27.9763H0L16.1837 0.0078125H30.2776L14.0939 27.9763Z'
          fill='current'
        />
        <path
          d='M40.0922 13.0381L31.45 27.9691H17.3596L26.0017 13.0381H40.0922Z'
          fill='current'
        />
        <path
          d='M48.8152 27.9685H34.7215L50.904 0H64.9977L48.8152 27.9685Z'
          fill='current'
        />
      </svg>
      {/* <button className={styles.menu}>
        <div className={styles.hamburger}>
          <span className={styles.top}></span>
          <span className={styles.mid}></span>
          <span className={styles.dwn}></span>
        </div>
        <span className={styles.menu_p}>MENU</span>
      </button> */}
      <ul className={styles.nav}>
        <li>
          <Link href='/'>
            <a
              className={`${styles.nav_link} link_btn ${
                router.pathname == '/' ? 'gradient_text' : ''
              }`}
            >
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/work'>
            <a
              className={`${styles.nav_link} link_btn ${
                router.pathname == '/work' ? 'gradient_text' : ''
              }`}
            >
              work
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
