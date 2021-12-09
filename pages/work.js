import SocialBlocks from './components/SocialBlocks';
import BlurBoxContainer from './components/BlurBoxContainer';
import ProjectThumbnail from './components/ProjectThumbnail';
import styles from '.././styles/work.module.scss';
import json from '.././public/images/projects/projects.json';
import Head from 'next/head';
import { useState } from 'react';
export default function Work() {
  const [Projects, setProjects] = useState(json);
  return (
    <>
      <Head>
        <title>Hamza Dahmani 🎨 Work</title>
      </Head>
      <BlurBoxContainer>
        <div className={styles.work_intro}>
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
      <section className={styles.projects}>
        {Projects.map((e, i) => (
          <ProjectThumbnail project={e} index={i} />
        ))}
      </section>
      <span className='br'></span>
      <SocialBlocks />
    </>
  );
}
