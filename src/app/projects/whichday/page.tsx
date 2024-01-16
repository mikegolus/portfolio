import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import image from '../../../../public/whichday-main.png'

export default function WhichDay() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={image}
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
          This past December, after some less than successful attempts to plan
          holiday get-togethers, I was inspired to create an app that provides
          easily shareable calendars to help people find get-together dates that
          work best for everyone in a group.
        </p>
        <p>
          I plan to evolve this project over time to include more features that
          will completely automate the legwork involved in coordinating group
          events or meet-ups.
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
