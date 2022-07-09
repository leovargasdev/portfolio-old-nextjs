import Image from 'next/image'
import { NextPage } from 'next'

import { SocialMedia } from 'components/SocialMedia'

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

      <SocialMedia />
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
