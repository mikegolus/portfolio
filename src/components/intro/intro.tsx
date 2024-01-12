import { Logo } from '../logo/logo'
import { WordSwapper } from '../word-swapper/word-swapper'
import styles from './intro.module.css'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.copy}>
          <h1>Hello, I&apos;m Mike Golus.</h1>
          <h2 className={sourceCodePro.className}>
            <div className={styles['shell-symbol']}>$</div>
            <div className={styles.command}>
              ui<span className={styles.slash}>/</span>ux.
            </div>
            <WordSwapper
              words={[
                { string: 'Engineer', delay: 3200 },
                { string: 'Designer', delay: 3200 },
                { string: 'Leader', delay: 3200 },
                { string: 'Advocate', delay: 3200 },
                { string: 'Innovator', delay: 3200 },
              ]}
            />
          </h2>
          <p>
            I like to work with passionate people to build great products.
            I&apos;ve built products with JavaScript, TypeScript, HTML/CSS,
            React, Next.js, .NET, Elixir, and Phoenix.
          </p>
        </div>
      </div>
    </section>
  )
}
