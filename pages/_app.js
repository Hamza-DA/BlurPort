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
      <Head>
        <meta name='theme-color' content='#0c0c0c' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='shortcut icon' href='./favicon.png' type='image/png' />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='keywords'
          content='frontend, developer, design, creative, html, css, js, reactjs, nextjs, sass'
        />
        <meta property='og:image' content='./opengraph.jpg' />
        <meta property='og:type' content='website' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@hamzadahmani01' />
        <meta name='twitter:image' content='./opengraph.jpg'></meta>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
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
