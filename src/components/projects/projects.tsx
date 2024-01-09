import { Section } from '../section/section'
import { Project } from './project'
import styles from './projects.module.css'

export const Projects = () => (
  <Section heading="Projects">
    <div className={styles['project-grid']}>
      <Project label="" sublabel="" />
      <Project label="" sublabel="" />
      <Project label="" sublabel="" />
      <Project label="" sublabel="" />
    </div>
  </Section>
)
