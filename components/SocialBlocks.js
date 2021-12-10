import styles from '../styles/SocialBlocks.module.scss';
import Pragraph from './Paragraph';
import SocialLinks from './SocialLinks';
export default function SocialBlocks() {
  return (
    <>
      <section className={styles.action_section}>
        <div className={styles.social_media}>
          <Pragraph className='tiny_p'>
            Follow me for more exciting upcoming projects, or just a simple
            talk!
          </Pragraph>
          <div className={styles.social_grid}>
            <SocialLinks length='full' />
          </div>
        </div>
        <div className={styles.action_email}>
          <Pragraph className='tiny_p'>Got an idea ?</Pragraph>
          <h3>
            <a href='mailto:madebyhamzadahmani@gmail.com'>Tell me about it</a>
          </h3>
        </div>
      </section>
    </>
  );
}
