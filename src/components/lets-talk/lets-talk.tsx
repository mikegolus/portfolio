import { LinkButton } from '../button/link-button'
import { Section } from '../section/section'
import styles from './lets-talk.module.css'

export const LetsTalk = () => (
  <Section heading="Let's Connect" headingLarge>
    <div className={styles.links}>
      <LinkButton label="Email" href="mailto:michaelgolus@gmail.com" />
      <LinkButton
        label="LinkedIn"
        href="https://www.linkedin.com/in/mikegolus/"
        target="_blank"
      />
      <LinkButton
        label="CodePen"
        href="https://codepen.io/mikegolus"
        target="_blank"
      />
    </div>
  </Section>
)
