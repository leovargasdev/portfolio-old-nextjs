import { NextPage } from 'next'

import styles from 'styles/home.module.scss'

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <h1>Leonardo Vargas</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est feugiat
      dapibus posuere gravida bibendum. Eget vitae at lectus leo. Proin quam sed
      fames amet, sit sed congue.
    </p>

    <div className={styles.background}>
      <span>LEONARDO VARGAS</span>
    </div>
  </div>
)

export default HomePage
