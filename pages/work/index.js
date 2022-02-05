import SocialBlocks from '../../components/SocialBlocks';
import BlurBoxContainer from '../../components/BlurBoxContainer';
import ProjectThumbnail from '../../components/ProjectThumbnail';
// import styles from '../styles/work.module.scss';
import json from '../../public/projects/projects.json';
import Head from 'next/head';
import { useState } from 'react';
export default function Work() {
  const [Projects, setProjects] = useState(json);
  return (
    <>
      <Head>
        <title>Hamza Dahmani &#127912; Work</title>
        <meta property='og:title' content='Hamza Dahmani &#127912; Work' />
        <meta
          name='description'
          content='The main technologies I use in my projects are ReactJs, NextJs, Sass, JavaScript, and TailwindCSS.'
        />
        <meta name='twitter:title' content='Hamza Dahmani &#127912; Work' />
        <meta
          name='twitter:description'
          content='The main technologies I use in my projects are ReactJs, NextJs, Sass, JavaScript, and TailwindCSS.'
        />
      </Head>
      <BlurBoxContainer>
        <div className={'work_intro'}>
          <p>
            When it comes to creating my projects, I always think outside the
            box.
          </p>
          <p>
            ReactJs, NextJs, Sass, JavaScript, and TailwindCSS are the key
            technologies I use.
          </p>
        </div>
      </BlurBoxContainer>
      <section className={'projects'}>
        {Projects.map((e, i) => (
          <ProjectThumbnail project={e} index={i} />
        ))}
      </section>
      <span className='br'></span>
      <SocialBlocks />
      <style jsx>{`
        .work_intro {
          margin-top: 10rem;
          z-index: 10;
          position: relative;

          p {
            margin-bottom: 2rem;
          }
        }
        .projects {
          margin-top: 8rem;
        }
      `}</style>
    </>
  );
}
