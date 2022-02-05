// import styles from '../styles/ProjectThumbnail.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ProjectLinks from './ProjectsLinks';
export default function ProjectThumbnail({ project, index }) {
  return (
    <>
      <article key={index} className={'project_thumb container'}>
        <span className={`gradient_text project_index`}>
          {index > 9 ? index + 1 : `0${index + 1}`}
        </span>
        <div className={'pr'}>
          <div className={'pr_info'}>
            <div className={'pr_name'}>
              <p className={'pr_category'}>
                {project.category?.map((e, i) =>
                  i + 1 < project.category.length ? `${e}, ` : `${e} `
                )}
              </p>
              <Link href={`/work/${project.name?.replaceAll(' ', '_')}`}>
                <h1 className='display_0 single_link'>{project.name}</h1>
              </Link>
              <p className='tiny_p'>{project.description}</p>
            </div>
            <div className={'pr_social'}>
              <a
                href={project.direct_link}
                className={`live_link ${
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
                <span className={'cholder'}>
                  <span className='colors'></span>
                </span>
              </a>
              <span className={'links'}>
                <ProjectLinks project={project} />
              </span>
            </div>
          </div>
          <div className={'pr_img'}>
            <div className={'img'}>
              <Image
                layout='fill'
                // width={400}
                // height={200}
                src={project.thumb}
                alt={project.name}
              />
            </div>
          </div>
        </div>
      </article>
      <style jsx>{`
        @import './styles/variables';
        @import './styles/mixins.scss';
        .project_thumb {
          position: relative;
          &:first-of-type {
            margin-top: -3rem;
          }
          .project_index {
            position: absolute;
            top: 50%;
            left: -20%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            font-size: 28rem;
            font-weight: 100;
            opacity: 0.3;
            pointer-events: none;
            user-select: none;
            @media screen and (max-width: 700px) {
              font-size: 20rem;
              top: 70%;
              left: -30%;
            }
            // &::after {
            //   margin-left: 1rem;
            //   content: '';
            //   display: block;
            //   width: 100%;
            //   height: 2px;
            //   background-color: $glass-gray;
            // }
          }
          // &::after {
          //   content: '';
          //   display: block;
          //   width: 100%;
          //   height: 2px;
          //   background-color: $glass-gray;
          // }
          .pr {
            display: grid;
            grid-template-rows: repeat(1, 1fr);
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            // justify-content: space-between;
            margin: 4rem 0 5rem 0;
            @media screen and (max-width: 700px) {
              grid-template-rows: repeat(2, auto);
              grid-template-columns: repeat(1, auto);
              flex-direction: column-reverse;
              align-items: flex-start;
            }
            .pr_info {
              order: 1;
              width: 90%;
              @media screen and (max-width: 700px) {
                width: 100%;
                order: 2;
                margin-top: 2rem;
              }
              .pr_category {
                font-size: 1rem;
                font-style: normal;
                font-weight: 500;
                line-height: 18px;
                letter-spacing: -1px;
                text-align: left;
              }
              .pr_name {
                margin-bottom: 3rem;
                h1 {
                  margin-bottom: 1rem;
                  margin-left: -0.2rem;
                  text-transform: capitalize;
                  max-width: 20ch;
                  cursor: pointer;
                  &:hover {
                    text-decoration: underline;
                  }
                  @media screen and (max-width: 700px) {
                    margin-bottom: 0.4rem;
                    margin-left: -0.1rem;
                    font-size: 2.3rem;
                    line-height: normal;
                  }
                  @media screen and (max-width: 980px) {
                    margin-bottom: 0.4rem;
                    margin-left: -0.1rem;
                    font-size: 2.3rem;
                    line-height: normal;
                  }
                  @media screen and (max-width: 1150px) {
                    font-size: 2.3rem;
                    line-height: normal;
                  }
                }
                p {
                  opacity: 0.8;
                  width: 40ch;
                  @media screen and (max-width: 980px) {
                    width: 26ch;
                  }
                  @media screen and (max-width: 700px) {
                    width: 100%;
                  }
                }
              }
              .pr_social {
                display: flex;
                align-items: center;
                justify-content: space-between;

                @media screen and (max-width: 700px) {
                  align-items: flex-start;
                  justify-content: space-between;
                  // flex-direction: column;
                }
                .live_link {
                  display: flex;
                  align-items: center;
                  @media screen and (max-width: 700px) {
                    margin-bottom: 2rem;
                  }
                }
                .links {
                  display: flex;
                  align-items: center;
                  // &::before {
                  //   margin: 0 1rem;
                  //   content: '';
                  //   display: block;
                  //   width: 10rem;
                  //   height: 2px;
                  //   background-color: $glass-gray;
                  //   @media screen and (max-width: 700px) {
                  //     display: none;
                  //   }
                  // }
                }
              }
            }
            .pr_img {
              order: 2;
              width: 100%;
              height: 100%;
              @media screen and (max-width: 700px) {
                width: 100%;
                order: 1;
              }
              .img {
                width: 100%;
                height: 100%;
                // width: 30rem;
                // height: 15rem;
                z-index: 2;
                position: relative;
                aspect-ratio: 5 / 4;
                @media screen and (max-width: 700px) {
                  width: 100%;
                  // height: 10rem;
                  margin-bottom: 1rem;
                }
                img {
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
              }
              .box {
                @media screen and (max-width: 980px) {
                  display: none;
                }
                display: block;
                width: 18rem;
                height: 10rem;
                position: relative;
                margin-top: -8rem;
                margin-left: -3rem;
                z-index: 0;
                @include gradient_border();
                .colors {
                  @include gradient_background(
                    40%,
                    30%,
                    70%,
                    10%,
                    50px,
                    40%,
                    5%,
                    30%,
                    10%,
                    50px
                  );
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
