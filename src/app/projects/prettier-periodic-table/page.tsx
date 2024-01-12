import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import image from '../../../../public/prettier-periodic-table-main.png'

export default function PrettierPeriodicTable() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={image}
          imageAlt="Prettier Periodic Table app screenshot"
          label="Prettier Periodic Table"
          sublabel="Solo Project"
          skills={[
            'React',
            'Next.js',
            'TypeScript',
            'Dynamo DB',
            'AWS',
            'Framer Motion',
          ]}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <p>
          Due to the popularity of my css periodic table on codepen, I built
          this hobby project to become familiar with AWS DynamoDB and the Framer
          Motion library for smooth UI animations and transitions.
        </p>
        <LinkButton
          href="https://prettierperiodictable.com"
          target="_blank"
          label="View Project"
        />
      </Section>
      <LetsTalk />
    </>
  )
}
