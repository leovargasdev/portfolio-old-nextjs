import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsTwitch,
  BsInstagram,
  BsTwitter
} from 'react-icons/bs'

import styles from './styles.module.scss'

export const SocialMedia = () => (
  <div className={styles.social}>
    <a
      role="link"
      href="https://github.com/leovargasdev"
      target="_blank"
      rel="noreferrer"
    >
      <BsGithub />
    </a>
    <a
      role="link"
      href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a
      role="link"
      href="https://www.instagram.com/leuvargas/"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram />
    </a>
    <a
      role="link"
      href="https://www.twitch.tv/leovargasdev"
      target="_blank"
      rel="noreferrer"
    >
      <BsTwitch />
    </a>
    <a
      role="link"
      href="https://www.youtube.com/c/leovargas"
      target="_blank"
      rel="noreferrer"
    >
      <BsYoutube />
    </a>
    <a
      role="link"
      href="https://twitter.com/leovargasdev"
      target="_blank"
      rel="noreferrer"
    >
      <BsTwitter />
    </a>
  </div>
)
