import { FaEnvelope, FaFolder, FaHome, FaUser } from 'react-icons/fa'
import { BsFillChatQuoteFill } from 'react-icons/bs'

import { HiHome, HiFolderOpen, HiChatAlt2, HiUserCircle } from 'react-icons/hi'

import styles from './styles.module.scss'

export const Navbar = () => (
  <nav className={styles.navigation}>
    <ul>
      {/* active */}
      <li className={`${styles.list} ${styles.active}`} data-color="#f53b57">
        <a href="">
          <HiHome size={24} />
          <span className={styles.title}>Home</span>
        </a>
      </li>
      <li className={styles.list} data-color="#3c40c6">
        <a href="">
          <HiUserCircle size={24} />
          <span className={styles.title}>Sobre</span>
        </a>
      </li>
      <li className={styles.list} data-color="#05c46b">
        <a href="">
          <HiFolderOpen size={24} />
          <span className={styles.title}>Projetos</span>
        </a>
      </li>
      <li className={styles.list} data-color="#0fbcf9">
        <a href="">
          <HiChatAlt2 size={24} />
          <span className={styles.title}>Contato</span>
        </a>
      </li>
      {/* <div className={styles.indicator}></div> */}
    </ul>
  </nav>
)
