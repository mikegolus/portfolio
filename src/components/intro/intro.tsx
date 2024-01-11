import { Logo } from '../logo/logo'
import { WordSwapper } from '../word-swapper/word-swapper'
import styles from './intro.module.css'

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.copy}>
          <h1>Hello, I&apos;m Mike Golus.</h1>
          <h2
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              UI/UX{' '}
              <WordSwapper
                words={[
                  { string: 'Engineer', delay: 3200 },
                  { string: 'Designer', delay: 3200 },
                  { string: 'Advocate', delay: 3200 },
                  { string: 'Leader', delay: 3200 },
                ]}
              />
            </div>
          </h2>
          <p>
            I like to work with passionate people to build great products. Over
            the years, I&apos;ve built products with JavaScript, TypeScript,
            HTML/CSS, React, Next.js, .NET, Elixir, and Phoenix.
          </p>
        </div>
      </div>
    </section>
  )
}
