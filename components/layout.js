// import styles from '../styles/layout.module.scss';
export default function Layout({ children }) {
  return (
    <>
      <main className={'container'}>{children}</main>
      <style jsx>
        {`
          .container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
}
