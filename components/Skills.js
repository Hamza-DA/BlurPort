import styles from '../styles/Skills.module.scss';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import styled, { ThemeProvider } from 'styled-components';
export default function Skills() {
  const skills = [
    {
      skill: 'Front-End Developement',
      description:
        'Websites developement with e-commerce functionality, make your business live!',
      thumbnail: '/images/rafinity.jpg',
    },
    {
      skill: 'Email HTML Templates',
      description:
        'Websites developement with e-commerce functionality, make your business live!',
      thumbnail: '/images/emailtemplate.png',
    },
    {
      skill: 'WooCommerce Store',
      description:
        'Websites developement with e-commerce functionality, make your business live!',
      thumbnail: '/images/belegant.png',
    },
    {
      skill: 'WordPress Development',
      description:
        'Websites developement with e-commerce functionality, make your business live!',
      thumbnail: '/images/wordpressblog.png',
    },
  ];
  const SkillSection = styled.article``;
  // const { className, image_containerStyles } = css.resolve`
  //   div {
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     inset: 0;
  //     z-index: 0;
  //     opacity: 0.2;
  //     overflow: hidden;
  //   }
  // `;
  const { className, styles } = css.resolve`
    .skills_section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 1.8rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
      }
    }
    .skill {
      position: relative;
      min-height: 15rem;
      padding: 2rem;
      @media screen and (max-width: 480px) {
        padding: 1rem 1.5rem;
      }
      // &:nth-child(1) {
      //   grid-area: 1 / 1 / 2 / 2;
      // }
      // &:nth-child(2) {
      //   grid-area: 1 / 2 / 2 / 3;
      // }
      // &:nth-child(3) {
      //   grid-area: 2 / 1 / 3 / 2;
      // }
      // &:nth-child(4) {
      //   grid-area: 2 / 2 / 3 / 3;
      // }
    }
    .skill_image_container {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      z-index: 0;
      opacity: 0.2;
      overflow: hidden;
    }
    .skill_image {
      // position: absolute;
      // top: 0;
      // right: 0;
      // left: 0;
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
    .skill_title {
      margin-bottom: 0.6rem;
    }
    .skill_description {
      opacity: 0.8;
      max-width: 40ch;
    }
    .skill_title,
    .skill_description,
    svg {
      position: relative;
      z-index: 2;
    }
  `;

  return (
    <>
      <section className={`skills_section container ${className}`}>
        {skills.map((skill, i) => (
          <InView triggerOnce={true} key={i}>
            {({ inView, ref }) => (
              <motion.article
                ref={ref}
                className={`${className} skill`}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{
                  duration: 0.8 + i / 12,
                  ease: 'easeOut',
                }}
              >
                <svg
                  width='36'
                  height='5'
                  viewBox='0 0 36 5'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 2.12012H35.5654'
                    stroke='url(#paint0_linear_225_191)'
                    strokeWidth='4'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_225_191'
                      x1='-9.35683'
                      y1='1.60075'
                      x2='-4.71725'
                      y2='21.215'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#FF103D' />
                      <stop offset='1' stopColor='#CF59E6' />
                    </linearGradient>
                  </defs>
                </svg>
                <h4 className={`${className} skill_title`}>{skill.skill}</h4>
                <p className={`tiny_p ${className} skill_description`}>
                  {skill.description}
                </p>
                <div className={`${className} skill_image_container`}>
                  <img
                    src={skill.thumbnail}
                    alt={skill.skill}
                    className={`${className} skill_image`}
                  />
                </div>
              </motion.article>
            )}
          </InView>
        ))}
        {styles}
      </section>
    </>
  );
}
