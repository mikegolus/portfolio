import { FC, PropsWithChildren } from 'react'
import styles from './experience.module.css'
import { Chip } from '../chip/chip'

interface ExperienceProps extends PropsWithChildren {
  company: string
  dates: string
  title: string
  skills: string[]
}

export const Experience: FC<ExperienceProps> = ({
  children,
  company,
  dates,
  title,
  skills,
}) => {
  return (
    <div className={styles.base}>
      <h3>{title}</h3>
      <p className={styles.company}>{`${company} • ${dates}`}</p>
      <p>{children}</p>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    </div>
  )
}
