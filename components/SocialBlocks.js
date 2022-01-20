// import styles from '../styles/SocialBlocks.module.scss';
import SocialLinks from './SocialLinks';
export default function SocialBlocks() {
  return (
    <>
      <section className='action_section'>
        <div className='action_wrapper'>
          <div className='social_media'>
            <p className='tiny_p'>
              Follow me for more exciting upcoming projects, or just a simple
              talk!
            </p>
            <div className='social_grid'>
              <SocialLinks length='full' />
            </div>
          </div>
          <div className='action_email'>
            <p className='tiny_p'>Got an idea ?</p>
            <h3>
              <a href='mailto:madebyhamzadahmani@gmail.com'>Tell me about it</a>
            </h3>
          </div>
        </div>
        <div className='mark'></div>
      </section>
      <style jsx>{`
        @import './styles/mixins.scss';
        @import './styles/variables';

        .action_section {
          margin-bottom: 6rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .action_wrapper {
            .social_media {
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              margin-bottom: 4rem;
              .tiny_p {
                margin-bottom: 1.5rem !important;
                opacity: 0.9 !important;
                @media screen and (min-width: 480px) {
                  width: 38ch;
                }
              }
              .social_grid {
                // width: 50%;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 2rem;
                grid-row-gap: 2rem;
                @media screen and (max-width: 768px) {
                  grid-template-columns: repeat(3, 1fr);
                }
                @media screen and (max-width: 480px) {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
            }
            .action_email {
              display: flex;
              flex-direction: column;
              p {
                margin-bottom: 0.4rem;
                opacity: 0.9;
              }
              h3 {
                text-transform: capitalize;
                &:hover {
                  @extend .gradient_text !optional;
                }
              }
            }
          }

          .social_blocks {
            position: relative;
            margin-bottom: 4rem;
            .tiny_p {
              margin-bottom: 1.5rem;
            }
            .flex_box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              column-gap: 1.5rem;
              position: relative;
              .outer_box {
                flex-shrink: 1;
                flex-grow: 1;
                flex-basis: 0;
                width: calc(100% / 3.2);
                position: relative;
                background-color: $glass-gray;
                transition: 0.3s ease-out all;
                @include gradient_border();
                &:hover {
                  // width: 500px;
                  flex-grow: 2;
                  .inf {
                    .social_name {
                      margin-bottom: 0.1rem;
                    }
                    .social_svg {
                      height: 1.2rem;
                      width: 1.2rem;
                      opacity: 1;
                      margin-right: 0.8rem;
                    }
                    .tiny_p {
                      height: 3.5rem;
                      opacity: 1;
                    }
                  }
                  .box {
                    .colors {
                      opacity: 1;
                    }
                  }
                }
                &::before {
                  background-color: $gray !important;
                }
                .box {
                  overflow: hidden;
                  width: 300px;
                  height: 200px;
                  position: relative;
                  background-color: $glass-gray !important;
                  .colors {
                    opacity: 0;
                    transition: 0.4s ease all;
                    overflow: visible !important;
                    @include gradient_background(
                      50%,
                      50%,
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
              .inf {
                position: absolute;
                bottom: 0.6rem;
                left: 0.7rem;
                z-index: 10;
                .social_name {
                  display: flex;
                  align-items: center;
                  .social_svg {
                    transition: 0.2s ease all;
                    width: 0;
                    opacity: 0;
                  }
                  p {
                    letter-spacing: 0;
                    line-height: normal;
                  }
                }
                .tiny_p {
                  transition: 0.2s ease all;
                  opacity: 0.7;
                  margin: 0;
                  height: 0;
                  overflow: hidden;
                  width: 80%;
                  opacity: 0;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
