import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'

export default function PrettierPeriodicTable() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image="/a-classic-retold-main.png"
          imageAlt="A Classic Retold website screenshot"
          label="A Classic Retold"
          sublabel="Client Project"
          skills={['React', 'Next.js', 'TypeScript', 'Prismic CMS']}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <p>
          A group of 9 authors working on a novel series collaboration needed a
          simple website to use during a several month period of intense social
          media marketing. During this time, the website would display preorder
          and release date countdowns and feature the latest book being promoted
          by the authors.
        </p>
        <p>
          I built this site with Next.js and Prismic so management of dates,
          book descriptions and links, and featured content could be handed off
          to one of the authors.
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
