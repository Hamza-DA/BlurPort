import Layout from '../components/layout';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import Header from '../components/Header';
import css from 'styled-jsx/css';
import '../styles/global.scss';
export default function App({ Component, pageProps, router }) {
  const { className, styles } = css.resolve`
    .app_wrapper {
      padding: 0 6rem;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #0c0c0c;
      @media screen and (max-width: 1100px) {
        padding: 0 4rem;
      }
      @media screen and (max-width: 768px) {
        padding: 0 3rem;
      }
      @media screen and (max-width: 480px) {
        padding: 0 1rem;
      }
    }
  `;
  const varients = {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <Layout>
        <Header />
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={true}>
            <m.div
              variants={varients}
              key={Component.name}
              initial='exit'
              animate='animate'
              exit='exit'
              className={`${className} app_wrapper`}
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </Layout>
      {styles}
    </>
  );
}
