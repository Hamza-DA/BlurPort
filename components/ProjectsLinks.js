import emoji from 'emoji-dictionary';
import css from 'styled-jsx/css';

export default function ProjectLinks({ project }) {
  const { className, styles } = css.resolve`
    .link_emojie {
      margin-right: 0.2rem;
    }
    .short_name {
      display: none;
      @media screen and (max-width: 980px) {
        display: block;
      }
    }
    .full_name {
      display: block;
      @media screen and (max-width: 980px) {
        display: none;
      }
    }
    .link {
      margin-right: 1rem;
      @media screen and (max-width: 700px) {
        margin: 0;
        margin-left: 1rem;
      }
    }
  `;
  return project.social.map((e, i) => (
    <>
      <a key={i} className={`${className} link`} href={e.link}>
        <span className={`${className} link_emojie`}>
          {emoji.getUnicode(e.emojie)}
        </span>
        <span className={`${className} short_name`}>{e.short}</span>
        <span className={`${className} full_name`}>{e.name}</span>
      </a>
      {styles}
    </>
  ));
}
