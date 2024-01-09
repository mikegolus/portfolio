import { FC, PropsWithChildren } from 'react'
import styles from './section.module.css'
import cx from 'classnames'

interface SectionProps extends PropsWithChildren {
  heading?: string
  headingLarge?: boolean
}

export const Section: FC<SectionProps> = ({
  children,
  heading,
  headingLarge,
}) => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h2 className={cx(headingLarge && styles.large)}>{`.${heading}`}</h2>
      {children}
    </div>
  </section>
)
