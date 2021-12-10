import styles from '../styles/ProjectThumbnail.module.scss';
import Image from 'next/image';
import emoji from 'emoji-dictionary';
export default function ProjectThumbnail({ project, index }) {
  const ProjectLinks = () => {
    return project.social.map((e, i) => (
      <a key={i} className='link' href={e.link}>
        <span className={styles.link_emojie}>{emoji.getUnicode(e.emojie)}</span>
        <span className={styles.short_name}>{e.short}</span>
        <span className={styles.full_name}>{e.name}</span>
      </a>
    ));
  };

  return (
    <>
      <div key={index} className={styles.project_thumb}>
        <span className={` ${styles.project_index}`}>
          <strong className='gradient_text'>
            {index > 9 ? index + 1 : `0${index + 1}`}
          </strong>
        </span>
        <div className={styles.pr}>
          <div className={styles.pr_info}>
            <div className={styles.pr_name}>
              <h1 className='display_0'>{project.name}</h1>
              <p className='tiny_p'>{project.description}</p>
            </div>
            <div className={styles.pr_social}>
              <a
                href={project.direct_link}
                className={`${styles.live_link} ${
                  project.direct_link == null && 'link_disabled'
                } link_btn`}
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
                view
                <span className={styles.cholder}>
                  <span className='colors'></span>
                </span>
              </a>
              <span className={styles.links}>
                <ProjectLinks />
              </span>
            </div>
          </div>
          <div className={styles.pr_img}>
            <div className={styles.img}>
              <Image
                layout='fill'
                // width={400}
                // height={200}
                src={project.thumb}
                alt={project.name}
              />
            </div>
            <span className={`${styles.box} gradient_border`}>
              <span className={styles.colors}></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
