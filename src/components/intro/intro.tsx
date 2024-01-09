import { Logo } from '../logo/logo'
import styles from './intro.module.css'

export const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.copy}>
        <h1>Hello, I&apos;m Mike Golus.</h1>
        <h2>UI/UX Engineer</h2>
        <p>
          I like to work with passionate people to build great products. Over
          the years, I&apos;ve built products with JavaScript, TypeScript,
          HTML/CSS, React, Next.js, .NET, Elixir, and Phoenix.
        </p>
      </div>
    </div>
  </section>
)
