import Image from 'next/image'
import { FaGithub, FaLink } from 'react-icons/fa'

import { IconCss, IconHtml, IconJavascript, IconNetlify } from 'icons'

import styles from './styles.module.scss'
import { IconTooltip } from 'components/IconTooltip'

const ProjectsPage = () => (
  <div className={styles.container}>
    <h1>Projetos</h1>

    <section className={styles.projects}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <article key={item} className={styles.project}>
          <div className={styles.project__image}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/projetos/disney-plus.png"
              alt="Imagem ilustrando o projeto"
            />
          </div>
          <div className={styles.project__content}>
            <h2>Recriando a interface da Disney Plus</h2>

            <div className={styles.project_stacks}>
              <IconTooltip text="HTML" icon={<IconHtml />} />
              <IconTooltip text="CSS" icon={<IconCss />} />
              <IconTooltip text="Netlify" icon={<IconNetlify />} />
              <IconTooltip text="JavaScript" icon={<IconJavascript />} />
            </div>

            <div className={styles.project__links}>
              <a href="">
                <FaLink /> Visualizar
              </a>
              <a href="" className={styles.link__github}>
                <FaGithub />
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  </div>
)

export default ProjectsPage
