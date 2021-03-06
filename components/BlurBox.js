// import styles from '../styles/BlurBox.module.scss';
export default function BlurBox() {
  return (
    <>
      <div className={'blur_border'}>
        <div className={`box gradient_border`}>
          {/* <div className={styles.colors}>
          <span className={styles.red}></span>
          <div className={styles.vb_flex}>
            <span className={styles.violet}></span>
            <span className={styles.blue}></span>
          </div>
        </div> */}
          <span className={'colors'}></span>
        </div>
        <span className={'before'}></span>
      </div>
      <style jsx>
        {`
          @import './styles/variables';
          @import './styles/mixins.scss';
          $width: 40rem;
          .blur_border {
            width: $width;
            height: $width;
            position: absolute;
            // top: -12vw;
            // right: -20vw;
            transform: rotate(15deg);
            top: -40%;
            right: -40%;
            // box-shadow: 0 1rem 2rem $shadow-black;
            display: flex;
            align-items: center;
            @media screen and (max-width: 480px) {
              transform: rotate(15deg);
              top: -36%;
              left: 60%;
            }
            @media screen and (max-width: 1100px) {
              top: -30%;
              left: 70%;
            }
            &::after {
              width: calc($width + 4px);
              height: calc($width + 4px);
              background: linear-gradient(
                45deg,
                $border-gray,
                $border-gray,
                $primary-black,
                $primary-black,
                $border-gray
              );
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: block;
            }
            .before {
              z-index: 2;
              width: $width;
              height: $width;
              background-color: $primary-black;
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: block;
            }
            .box {
              width: inherit;
              height: inherit;
              z-index: 3;
              position: relative;
              overflow: hidden;
              background-color: $glass-gray;
              @include gradient_border();
              .colors {
                @include gradient_background(
                  45%,
                  50%,
                  35%,
                  20%,
                  80px,
                  20%,
                  65%,
                  20%,
                  10%,
                  80px
                );
                @media screen and (max-width: 480px) {
                  @include gradient_background(
                    35%,
                    60%,
                    35%,
                    18%,
                    60px,
                    30%,
                    50%,
                    30%,
                    10%,
                    60px
                  );
                }
              }
              // .colors {
              //   position: absolute;
              //   top: 60%;
              //   left: 50%;
              //   transform: translate(-50%, -50%) rotate(60deg);
              //   @keyframes colors {
              //     from {
              //       transform: rotate(0);
              //     }
              //     to {
              //       transform: rotate(360deg);
              //     }
              //   }
              //   span {
              //     display: block;
              //     position: relative;
              //     filter: blur(calc($width / 11));
              //     margin: -0.5vw;
              //     transform-origin: 53% 53%;
              //     border-radius: 50%;
              //     animation: 4s linear colors infinite;
              //   }
              //   .vb_flex {
              //     display: flex;
              //   }
              //   .red {
              //     width: $width / 3;
              //     height: $width / 3;
              //     background-color: $primary-red;
              //     z-index: 3;
              //     margin-bottom: -3rem;
              //   }
              //   .violet {
              //     width: $width / 4.8;
              //     height: $width / 4.8;
              //     background-color: $violet;
              //     z-index: 2;
              //   }
              //   .blue {
              //     width: $width / 6;
              //     height: $width / 6;
              //     background-color: $blue;
              //   }
              // }
            }
          }
        `}
      </style>
    </>
  );
}
