import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import whichDayMain from './which-day-main.png'

export default function WhichDay() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={whichDayMain}
          imageAlt="WhichDay.io app screenshot"
          label="WhichDay.io"
          sublabel="Solo Project"
          skills={[
            'React',
            'Next.js',
            'TypeScript',
            'Postgres',
            'Prisma',
            'Tailwind',
          ]}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <p>
          Last December, after some less than successful attempts to plan
          holiday get-togethers, I created an app that provides easily shareable
          calendars to help people find which days everyone is available.
        </p>
        <LinkButton
          href="https://whichday.io"
          target="_blank"
          label="Check it out"
        />
      </Section>
      <LetsTalk />
    </>
  )
}
