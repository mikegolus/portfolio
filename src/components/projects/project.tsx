import { FC } from 'react'
import styles from './project.module.css'

interface ProjectProps {
  label: string
  sublabel: string
}

export const Project: FC<ProjectProps> = ({}) => (
  <div className={styles.project}>
    <div className={styles.image}></div>
  </div>
)
