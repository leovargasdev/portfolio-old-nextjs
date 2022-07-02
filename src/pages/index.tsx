import { NextPage } from 'next'
import Image from 'next/image'
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsTwitch,
  BsInstagram,
  BsTwitter
} from 'react-icons/bs'

import { FaGithubSquare } from 'react-icons/fa'

import styles from 'styles/home.module.scss'

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <div className={styles.background}>
      <span>LEONARDO VARGAS</span>
    </div>

    <section className={styles.content}>
      <h1>Leonardo Vargas</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est feugiat
        dapibus posuere gravida bibendum. Eget vitae at lectus leo. Proin quam
        sed fames amet, sit sed congue.
      </p>

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
    </section>

    <div className={styles.avatar}>
      <Image
        src="/eu.png"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
      />
    </div>
  </div>
)

export default HomePage
