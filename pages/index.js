import Head from 'next/head';
// import styles from '../styles/index.module.scss';
import SocialBlocks from '../components/SocialBlocks';
import SocialLinks from '../components/SocialLinks';
import BlurBoxContainer from '../components/BlurBoxContainer';
import Pragraph from '../components/Paragraph';
import Skills from '../components/Skills';

// custom cursor https://codesandbox.io/s/n6i55?file=/src/index.js
// https://codepen.io/january1979/pen/MWbgRjy?editors=0010
export default function Home() {
  return (
    <>
      <Head>
        <title>Hamza Dahmani &#128570; Front-End Developer</title>
        <meta
          name='google-site-verification'
          content='1fI2fk6pPyU-bCI1qsg8E6hUkhKhMytheGSSWySL5tM'
        />
        <meta
          property='og:title'
          content='Hamza Dahmani &#128570; Creative Front-End developer'
        />
        <meta
          name='description'
          content="Hi, I'm Hamza Dahmani, a creative self-taught Front-End developer. My mission since 2018 is to turn your brilliant ideas into a one-of-a-kind project!"
        />
        <meta
          name='twitter:title'
          content='Hamza Dahmani &#128570; Creative Front-End developer'
        />
        <meta
          name='twitter:description'
          content="Hi, I'm Hamza Dahmani, a creative self-taught Front-End developer. My mission since 2018 is to turn your brilliant ideas into a one-of-a-kind project!"
        />
      </Head>
      <BlurBoxContainer>
        <div className={'AInf'}>
          <h2 className={'welcome_header'}>
            turning interesting <br /> ideas into wonderful <br />{' '}
            <strong className='gradient_text'>solid</strong> projects!
          </h2>

          <button
            onClick={() =>
              window.scrollTo && window.scrollTo(0, document.body.scrollHeight)
            }
            className={`${'cta_button'} glass link_btn`}
          >
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
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
                  <stop stopColor='#FF103D' />
                  <stop offset='1' stopColor='#CF59E6' />
                </linearGradient>
              </defs>
            </svg>
            Contact me
            <span className={'cholder'}>
              <span className={'colors'}></span>
            </span>
          </button>
        </div>
      </BlurBoxContainer>
      <section className={'network_section'}>
        <div className={'linksHolder'}>
          <SocialLinks length='short' />
        </div>
        <div className={`${'box'} gradient_border`}>
          <span className={'colors'}></span>
        </div>
      </section>
      <section className={'about_section'}>
        <Pragraph className={'about_p'}>
          Howdy &#129312; ! <br /> I'm Hamza Dahmani, a creative self-taught
          Front-End developer. My mission since 2018 is to turn your brilliant
          ideas into a one-of-a-kind production!
        </Pragraph>

        <Pragraph className={'about_p'}>
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
      <Skills />
      <span className='br'></span>
      <SocialBlocks />
      <style jsx>{`
        @import './styles/variables';
        @import './styles/mixins.scss';

        .AInf {
          z-index: 4;
          position: relative;
          margin-top: 10rem;
          @media screen and (max-width: 1100px) {
            margin-top: 12rem;
          }
          @media screen and (max-width: 480px) {
            margin-top: 8rem;
            .cta_button {
              display: none;
            }
          }

          .cta_button {
            overflow: hidden;
            margin-top: 2rem;
            padding: 1rem 2rem;
            @include glass(2px);
            position: relative;
            .cholder {
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              opacity: 0;
              transition: 0.5s ease all;
              .colors {
                @include gradient_background(
                  40%,
                  20%,
                  40%,
                  40%,
                  30px,
                  30%,
                  55%,
                  30%,
                  10%,
                  30px
                );
              }
            }
            &:hover .cholder {
              opacity: 1;
            }
          }
        }
        .network_section {
          position: relative;
          padding: 7.5rem 0;
          @media screen and (max-width: 768px) {
            padding: 5.5rem 0;
          }

          .linksHolder {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            &::after {
              content: '';
              display: block;
              width: 100%;
              height: 2px;
              background-color: $glass-gray;
            }
            a {
              margin-left: 1rem;
            }
          }
          .box {
            width: 300px;
            height: 300px;
            position: absolute;
            top: 150%;
            transform: translate(-100%, -50%) rotate(-165deg);
            @include gradient_border();
            .colors {
              @include gradient_background(
                40%,
                20%,
                42%,
                0%,
                50px,
                20%,
                65%,
                20%,
                10%,
                50px
              );
            }
          }
        }

        .about_section {
          // margin-top: 4rem;
          z-index: 2;
          position: relative;
          p {
            max-width: 45ch;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
}
