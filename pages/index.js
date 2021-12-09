import Head from 'next/head';
import BlurBox from './components/BlurBox';
import styles from '../styles/index.module.scss';
import SocialBlocks from './components/SocialBlocks';
import SocialLinks from './components/SocialLinks';
import BlurBoxContainer from './components/BlurBoxContainer';
import { motion } from 'framer-motion';
import Pragraph from './components/Paragraph';
// custom cursor https://codesandbox.io/s/n6i55?file=/src/index.js
// https://codepen.io/january1979/pen/MWbgRjy?editors=0010
export default function Home() {
  return (
    <>
      <Head>
        <title>Hamza Dahmani &#128570; Front-End Developer</title>
      </Head>
      <BlurBoxContainer>
        <div className={styles.AInf}>
          <h2 className={styles.welcome_header}>
            turning interesting <br /> ideas into wonderful <br />{' '}
            <strong className='gradient_text'>solid</strong> projects!
          </h2>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={`${styles.cta_button} glass link_btn`}
          >
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16.7122 0.0991211L16.636 12.563L13.636 12.5446L13.6806 5.25203L2.97288 15.9598L0.851562 13.8385L11.5593 3.1307L4.26674 3.17532L4.24839 0.175379L16.7122 0.0991211Z'
                fill='url(#paint0_linear_76_83)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_76_83'
                  x1='-3.32119'
                  y1='-8.13836'
                  x2='35.1831'
                  y2='-3.56142'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#FF103D' />
                  <stop offset='1' stop-color='#CF59E6' />
                </linearGradient>
              </defs>
            </svg>
            Contact me
            <span className={styles.cholder}>
              <span className='colors'></span>
            </span>
          </motion.button>
        </div>
      </BlurBoxContainer>
      <section className={styles.network_section}>
        <div className={styles.linksHolder}>
          <SocialLinks length='short' />
        </div>
        <div className={`${styles.box} gradient_border`}>
          <span className={styles.colors}></span>
        </div>
      </section>
      <section className={styles.about_section}>
        <Pragraph className={styles.about_p}>
          Howdy &#129312; ! <br /> I'm Hamza Dahmani, a creative self-taught
          Front-End developer. My mission since 2018 is to turn your brilliant
          ideas into a one-of-a-kind production!
        </Pragraph>

        <Pragraph className={styles.about_p}>
          I'm now looking for a new opportunity to work with a group of talented
          designers and developers. Drop me an{' '}
          <a href='mailto:madebyhamzadahmani@gmail.com' target='_blank'>
            <span className='gradient_text'>email</span>
            <span>&#128231;</span>
          </a>{' '}
          if you believe I would be a good fit.
        </Pragraph>
      </section>
      <span className='br'></span>
      <SocialBlocks />
    </>
  );
}
