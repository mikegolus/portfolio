import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import terratoryMain from './terratory-main.png'

export default function Terratory() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={terratoryMain}
          imageAlt="Terratory app screenshots"
          label="Terratory"
          sublabel="Startup"
          skills={['Elixir', 'Phoenix', 'Postgres', 'Tailwind']}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <p>
          Terratory is solving for the software gap the vast majority of small
          lawncare and landscaping businesses find themselves in. With an
          accessible and affordable solution for team management, intelligent
          scheduling, and easy routing, operators can know the work is getting
          done and spend more time living the life they want.
        </p>
        <p>
          I built a layout and core component framework in Elixir with Phoenix
          LiveView for the Terratory PWA meant to mimic many native mobile UI
          patterns. I also worked closely with the lead product designer to
          establish a lightweight and highly flexible design system simplifying
          the translation of rapidly evolving design requirements into DRY
          frontend code throughout early ideation phases.
        </p>
      </Section>
      <LetsTalk />
    </>
  )
}
