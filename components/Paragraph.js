import css from 'styled-jsx/css';
export default function Pragraph({ children, clas }) {
  const { className, styles } = css.resolve`
    .tiny_p {
      margin-bottom: 1.5rem !important;
      opacity: 0.9 !important;
      @media screen and (min-width: 480px) {
        width: 38ch;
      }
    }
  `;
  return (
    <>
      <p className={`${clas} ${className}`}>{children}</p> {styles}
    </>
  );
}
