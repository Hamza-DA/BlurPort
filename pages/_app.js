import Layout from '../components/layout';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import global from '../styles/global.scss';
import Header from '../components/Header';
import Head from 'next/head';
export default function App({ Component, pageProps, router }) {
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
              className='app_wrapper'
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </Layout>
    </>
  );
}
