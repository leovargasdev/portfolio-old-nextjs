import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiHome, HiFolderOpen, HiChatAlt2, HiUserCircle } from 'react-icons/hi'

import styles from './styles.module.scss'

const navigation = [
  { name: 'Home', path: '/', icon: <HiHome size={24} /> },
  { name: 'Sobre', path: '/sobre', icon: <HiUserCircle size={24} /> },
  { name: 'Projetos', path: '/projetos', icon: <HiFolderOpen size={24} /> },
  { name: 'Contato', path: '/contato', icon: <HiChatAlt2 size={24} /> }
]

export const Navbar = () => {
  const { asPath } = useRouter()

  return (
    <nav className={styles.navigation}>
      <ul>
        {navigation.map(navItem => (
          <li
            key={navItem.path}
            className={`${styles.navItem} ${
              asPath === navItem.path ? styles.active : ''
            }`}
          >
            <Link href={navItem.path}>
              <a>
                {navItem.icon}
                <span className={styles.tooltip}>{navItem.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
