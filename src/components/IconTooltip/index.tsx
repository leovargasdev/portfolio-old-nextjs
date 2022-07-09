import styles from './styles.module.scss'

interface IconTooltipProps {
  text: string
  icon: React.ReactNode
}

export const IconTooltip = ({ text, icon }: IconTooltipProps) => (
  <div className={styles.container} data-color="blue">
    {icon}
    <span className={styles.tooltip}>{text}</span>
  </div>
)
