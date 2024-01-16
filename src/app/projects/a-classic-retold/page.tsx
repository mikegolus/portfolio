import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import image from '../../../../public/a-classic-retold-main.png'

export default function PrettierPeriodicTable() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={image}
          imageAlt="A Classic Retold website screenshot"
          label="A Classic Retold"
          sublabel="Client Project"
          skills={['React', 'Next.js', 'TypeScript', 'Prismic CMS']}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <p>
          A group of 9 authors working on a novel series collaboration needed a
          marketing website to use during a several month period of frequent
          social media campaigns. During this time, the website displayed
          preorder and release date countdowns and featured the latest book
          being promoted by the authors.
        </p>
        <p>
          I built this site with Next.js and Prismic CMS so dates, book
          descriptions, links, and featured content could be managed by the
          authors.
        </p>
        <LinkButton
          href="https://aclassicretold.com"
          target="_blank"
          label="View Project"
        />
      </Section>
      <LetsTalk />
    </>
  )
}
