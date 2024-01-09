import { Experience } from '@/components/experience/experience'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Section } from '@/components/section/section'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <HeaderLogo />
      <Section heading="About">
        <p>
          Mike is an accomplished UI/UX engineer and design system leader with
          8+ years of frontend engineering expertise complemented by an
          impressive 12+ year journey in design. His comprehensive experience
          spans the creation of innovative web and native applications, engaging
          marketing websites, as well as key feature developments for extensive
          enterprise application suites. Mike&apos;s dual proficiency in both
          engineering and design positions him uniquely to deliver solutions
          that are not only efficient and technically sound but also
          aesthetically compelling.
        </p>
      </Section>
      <Section heading="Work Experience">
        <Experience
          company="Terratory"
          dates="Aug 2023 – Present"
          skills={['TypeScript', 'Elixir', 'Phoenix', 'Figma', 'HTML/CSS']}
          title="Frontend Engineer"
        >
          Mike is currently working on building a layout and core component
          framework in Elixir with Phoenix LiveView for a PWA meant to mimic
          many native mobile UI patterns. He also worked closely with the lead
          product designer{' '}
          <Link target="_blank" href="https://andrewramos.com">
            @Andrew Ramos
          </Link>{' '}
          to establish a lightweight and highly flexible design system
          simplifying the translation of rapidly evolving design requirements
          into DRY frontend code throughout early ideation phases.
        </Experience>
        <Experience
          company="Extend"
          dates="Aug 2021 – Dec 2023"
          skills={[
            'TypeScript',
            'Cypress',
            'Figma',
            'React.js',
            'Storybook',
            'TanStack Table',
          ]}
          title="Senior Design System Engineer"
        >
          Serving as a bridge between design and engineering, Mike built and
          maintained an extensive design system in Figma with a companion React
          component library documented in Storybook. He mentored product
          designers toward a system-first design methodology greatly increasing
          UI design quality, efficiency and consistency. With his practical
          knowledge and experience in frontend development, he functioned as the
          engineering ambassador to the design team helping them form design
          requirements in harmony with modern UI standards and well-established
          internal development practices.
        </Experience>
        <Experience
          company="ACS Technologies"
          dates="Apr 2018 – Aug 2021"
          skills={['Sketch', 'Figma', 'ProtoPie', 'React.js', 'Illustrator']}
          title="Senior UX Designer"
        >
          As the primary UX designer for three feature teams, Mike played a
          pivotal role in the evolution of applications that enabled users to
          handle accounting, human resources, online giving management, and
          community involvement. He cultivated strong, trusted relationships
          with team members as well as department leadership. The cyclical
          design process that he implemented moved roadmapped features through
          ideation, prototyping, and testing. He also worked regularly with a UX
          design focus group that cultivated a holistic understanding of
          ACS&apos;s design ecosystem, evaluating each individual
          solution&apos;s impact on all other touch-points. This resulted in
          design direction that consistently aligned with business objectives,
          instilled confidence in stakeholders, and increased user satisfaction.
        </Experience>
        <Experience
          company="Your Creative People"
          dates="Jan 2011 – Apr 2018"
          skills={['JavaScript', 'HTML/CSS', 'Photoshop', 'Illustrator']}
          title="Lead Interactive Designer/Developer"
        >
          During Mike&apos;s time at YCP, he had a significant impact on the
          aesthetic and functional excellence of their web design projects,
          earning high regard from clients. He worked to thoroughly understand
          each client&apos;s brand and audience in order to create bespoke UI
          frameworks that would resonate with the intended users. As the lead
          interactive designer, he supervised several designers and helped
          ensure their work upheld YCP&apos;s standards of excellence before
          going to the creative director for approval. He implemented strict
          technical standards for HTML and CSS, prioritizing efficiency and code
          quality. Mike&apos;s involvement at YCP significantly enhanced the
          caliber of their projects, firmly positioning them as a local leader
          for effective online solutions.
        </Experience>
      </Section>
      <LetsTalk />
    </>
  )
}
