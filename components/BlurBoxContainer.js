// import styles from '../styles/BlurBoxContainer.module.scss';
import BlurBox from './BlurBox';
export default function BlurBoxContainer({ children }) {
  return (
    <>
      <section className='blur_container container'>
        <div className='A'>{children}</div>
        <div className='B'>
          <BlurBox />
        </div>
      </section>
      <style jsx>
        {`
          @import './styles/mixins.scss';
          @import './styles/variables';
          .blur_container {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 1100px) {
              flex-direction: column;
            }
            .A {
              position: relative;
              // flex-grow: 1;
              flex: 1;
            }

            .B {
              // flex-grow: 1;
              flex: 1;
              position: relative;
              @media screen and (max-width: 1100px) {
                grid-area: 1 / 1 / 2 / 2;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
              }
            }
          }
        `}
      </style>
    </>
  );
}
