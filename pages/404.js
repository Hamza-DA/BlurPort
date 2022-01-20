// import styles from '../styles/404.module.scss';
import Link from 'next/link';
export default function c404() {
  return (
    <>
      <section className={'container'}>
        <div className={'error'}>
          <div className={'text'}>
            <h1 className='error_message'>
              Congratulations, you broke the internet!
            </h1>
            <p className='tiny_p'>
              jk lol, the page you are looking for is not available, here some
              that are :
            </p>
            <ul className='nav'>
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
          <h1 className={`error_code gradient_text`}>404</h1>
        </div>
      </section>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .error {
            display: flex;
            align-items: center;
            @media screen and (max-width: 768px) {
              flex-direction: column-reverse;
            }
            .error_code {
              font-size: 20rem;
              // margin-left: -28rem;
              font-weight: 900;
              @media screen and (max-width: 768px) {
                font-size: 8rem;
              }
            }
            .text {
              .error_message {
                font-size: 2.5rem;
                width: 16ch;
                font-weight: 500;
                line-height: 1;
                margin-bottom: 0.3rem;
                margin-left: -0.15rem;
                line-height: 1.444em;
                letter-spacing: -1px;
                @media screen and (max-width: 768px) {
                  font-size: 2rem;
                  margin-bottom: 0.7rem;
                }
              }
              @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
              }
              p {
                opacity: 0.8;
                width: auto;
                //   &:nth-child(1) {
                //   }
              }
              .nav {
                margin-top: 0.5rem;
                display: flex;
                align-items: center;
                li {
                  list-style: none;
                  &:nth-child(2) {
                    margin-left: 1rem;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
