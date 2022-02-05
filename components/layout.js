// import styles from '../styles/layout.module.scss';
export default function Layout({ children }) {
  return (
    <>
      <main className={'appcontainer'}>{children}</main>
      <style jsx>
        {`
          .appcontainer {
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
