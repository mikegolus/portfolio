import { Section } from '../section/section'
import { Project } from './project'
import styles from './projects.module.css'

export const Projects = () => (
  <Section heading="Projects">
    <div className={styles['project-grid']}>
      <Project
        image="/terratory-main.png"
        imageAlt="Terratory app screenshots"
        label="Terratory"
        href="/projects/terratory"
        sublabel="Startup"
        skills={['Elixir', 'Phoenix', 'Postgres', 'Tailwind']}
      />
      <Project
        image="/whichday-main.png"
        imageAlt="WhichDay.io app screenshot"
        label="WhichDay.io"
        sublabel="Solo Project"
        href="/projects/whichday"
        skills={[
          'React',
          'Next.js',
          'TypeScript',
          'Postgres',
          'Prisma',
          'Tailwind',
        ]}
      />
      <Project
        image="/a-classic-retold-main.png"
        imageAlt="A Classic Retold website screenshot"
        label="A Classic Retold"
        sublabel="Client Project"
        href="/projects/a-classic-retold"
        skills={['React', 'Next.js', 'TypeScript', 'Prismic CMS']}
      />
      <Project
        image="/prettier-periodic-table-main.png"
        imageAlt="Prettier Periodic Table app screenshot"
        label="Prettier Periodic Table"
        sublabel="Solo Project"
        href="/projects/prettier-periodic-table"
        skills={[
          'React',
          'Next.js',
          'TypeScript',
          'Dynamo DB',
          'AWS',
          'Framer Motion',
        ]}
      />
    </div>
  </Section>
)
