import styles from '../styles/SocialLinks.module.scss';
import emoji from 'emoji-dictionary';
export default function SocialLinks({ length }) {
  const socialMedia = [
    {
      name: 'github',
      shortName: 'gh',
      emojie: 'space_invader',
      link: 'https://github.io/Hamza-DA',
    },
    {
      name: 'twitter',
      shortName: 'tw',
      emojie: 'bird',
      link: 'https://twitter.com/Hamzadahmani01',
    },
    {
      name: 'instagram',
      shortName: 'in',
      emojie: 'camera',
      link: 'https://instagram.com/hamzadahmani1',
    },
    {
      name: 'linkedin',
      emojie: 'man_in_tuxedo',
      link: 'https://www.linkedin.com/in/hamzadahmani1/',
    },
    {
      name: 'dribbble',
      emojie: 'soccer',
      link: 'https://dribbble.com/HamzaDa',
    },
    {
      name: 'resume',
      download: true,
      emojie: 'closed_book',
      link: './resume.pdf',
    },
    {
      name: 'email me',
      emojie: 'e-mail',
      link: 'mailto:madebyhamzadahmani@gmail.com',
    },
  ];
  return socialMedia.slice(0, length == 'short' ? 3 : 7).map((e, i) => (
    <a
      key={i}
      className={`${styles.link} link`}
      href={e.link}
      target='_blank'
      download={e.download == true ? 'Hamza Dahmani - Resume' : ''}
    >
      <span className={`${styles.link_emojie} emojie`}>
        {emoji.getUnicode(`${e.emojie}`)}
      </span>
      {length == 'short' ? e.shortName : e.name}
    </a>
  ));
}
