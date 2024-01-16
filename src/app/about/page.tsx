import { Experience } from '@/components/experience/experience'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Section } from '@/components/section/section'

export default function About() {
  return (
    <>
      <HeaderLogo />
      <Section heading="About" bg="strong" grid>
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
          company="Extend"
          dates="Aug 2021 – Dec 2023"
          skills={[
            'JavaScript/TypeScript',
            'HTML/CSS',
            'Cypress',
            'Figma',
            'React',
            'Storybook',
            'TanStack Table',
          ]}
          title="Senior Software Engineer"
        >
          <ul>
            <li>
              Greatly enhanced the scalability of the frontend codebase by
              building and maintaining an extensive and robust React component
              library with a companion Figma design system further documented
              with JSDocs and Storybook
            </li>
            <li>
              Became a trusted GitHub code reviewer for pull requests related to
              building new UI components or augmenting existing ones
            </li>
            <li>
              Increased engineering productivity and worked toward guaranteeing
              non-breaking changes by leveraging TypeScript and Cypress
              component testing
            </li>
            <li>
              Created a library of React hooks and utilities to make the
              translation of common design patterns to code more seamless and
              efficient
            </li>
            <li>
              Served as engineering “ambassador” to the product design team,
              with practical frontend engineering knowledge and experience,
              guiding them to form design requirements in harmony with modern UI
              standards and well-established internal development practices
            </li>
            <li>
              Mentored product designers toward a system-first design
              methodology, increasing UI design quality and consistency
            </li>
          </ul>
        </Experience>
        <Experience
          company="Terratory"
          dates="Aug 2023 – Present (part-time)"
          skills={[
            'Elixir',
            'Phoenix',
            'JavaScript/TypeScript',
            'Postgres',
            'Tailwind',
            'HTML/CSS',
            'Figma',
          ]}
          title="Frontend Engineer"
        >
          <ul>
            <li>
              Worked with the engineering and design team to build a layout and
              core component framework in Elixir and develop the Phoenix
              LiveView frontend for a progressive web app meant to mimic native
              mobile UI patterns
            </li>
            <li>
              Worked closely with the lead product designer to establish a
              highly flexible design system, simplifying the translation of
              rapidly evolving design requirements into efficient frontend code
              throughout early ideation phases
            </li>
          </ul>
        </Experience>
        <Experience
          company="ACS Technologies"
          dates="Apr 2018 – Aug 2021"
          skills={['Sketch', 'Figma', 'ProtoPie', 'React', 'Illustrator']}
          title="Senior UX Designer"
        >
          <ul>
            <li>
              Served as primary UX designer for three feature teams, evolving a
              suite of applications that enabled users to handle accounting,
              human resources, online giving management, and community
              involvement
            </li>
            <li>
              Supplemented Sketch prototyping with React apps for even more
              comprehensive demoing and testing of complex design concepts
            </li>
            <li>
              Implemented a cyclical UX design process that guided roadmapped
              features collaboratively through ideation, prototyping, and
              testing
            </li>
            <li>
              Worked with UX design focus groups to cultivate a holistic
              understanding of the product ecosystem that evaluated the impact
              of each solution on all other user touch points
            </li>
            <li>
              Provided design direction that aligned with business objectives,
              instilled confidence in stakeholders, and increased user
              satisfaction
            </li>
          </ul>
        </Experience>
        <Experience
          company="Your Creative People"
          dates="Jan 2011 – Apr 2018"
          skills={[
            'JavaScript',
            'HTML/CSS',
            '.NET',
            'Photoshop',
            'Illustrator',
          ]}
          title="Lead Interactive Designer/Developer"
        >
          <ul>
            <li>
              Raised the bar for the aesthetic and functional excellence of web
              design projects, earning high regard from clients
            </li>
            <li>
              Worked to thoroughly understand each client&apos;s brand and
              audience in order to create bespoke UI frameworks that would
              resonate with the intended users
            </li>
            <li>
              Supervised several designers and helped ensure their work upheld
              our standards of excellence before going to the Creative Director
              for approval
            </li>
            <li>
              Implemented and carried out strict technical standards for HTML,
              CSS, and JavaScript prioritizing code efficiency and quality
            </li>
            <li>
              Helped firmly position YCP as a local leader for effective online
              solutions
            </li>
          </ul>
        </Experience>
      </Section>
      <LetsTalk />
    </>
  )
}
