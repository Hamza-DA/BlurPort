import Link from 'next/link';
// import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/dist/client/router';
export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className='header'>
        <svg
          className='logo'
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

        <ul className='nav'>
          <li>
            <Link href='/'>
              <a
                className={`nav_link link_btn ${
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
                className={`nav_link link_btn ${
                  router.pathname == '/work' ? 'gradient_text' : ''
                }`}
              >
                work
              </a>
            </Link>
          </li>
        </ul>
      </header>
      <style jsx>
        {`
          @import './styles/variables';
          @import './styles/mixins.scss';
          .header {
            position: fixed;
            z-index: 30;
            margin-top: 0.8rem;
            padding: 1.8rem 6rem;
            width: 35rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: solid 2px $border-gray;
            @supports (backdrop-filter: blur(100px)) {
              background-color: $glass-gray;
              backdrop-filter: blur(100px);
            }
            @supports not (backdrop-filter: blur(100px)) {
              background-color: $primary-black;
            }

            box-shadow: 0 1rem 2rem $shadow-black;
            @media screen and (max-width: 1100px) {
              padding: 1.4rem 4rem;
              width: 26rem;
            }
            @media screen and (max-width: 480px) {
              border: none;
              margin-top: 0.4rem;
              padding: 1.3rem 1rem;
              width: 100%;
            }
            // @include glass(2px);
            svg {
              fill: $primary-white;
            }
            .nav {
              display: flex;
              align-items: center;
              list-style: none;
              li {
                display: flex;
                align-items: center;
              }
              .nav_link {
                margin-left: 2rem;
              }
            }
            .menu {
              display: flex;
              align-items: center;
              .hamburger {
                display: flex;
                flex-direction: column;
                opacity: 0.8;
                span {
                  background-color: $primary-white;
                  height: 1px;
                  display: block;
                  margin: 0.22rem 0;
                }
                .top,
                .dwn {
                  width: 2.5rem;
                }
                .mid {
                  width: 1.5rem;
                }
              }
              .menu_p {
                display: block;
                margin-left: -0.7rem;
                font-size: 0.556rem;
                font-style: normal;
                font-weight: 800;
                line-height: 0px;
                letter-spacing: 3px;
                text-align: left;
              }
            }
          }
        `}
      </style>
    </>
  );
}
