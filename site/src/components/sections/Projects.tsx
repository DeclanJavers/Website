'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { useArcade } from '@/context/ArcadeContext'
import Picture from '@/components/Picture'
import { SectionHead } from './Experience'
import type { Project } from '@/types'

export default function Projects() {
  const featured = projects.filter((p) => p.playId)
  const rest = projects.filter((p) => !p.playId)
  const { openArcade } = useArcade()

  return (
    <section id="work" className="scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHead
          n="02"
          title="Selected work"
          aside={
            <>
              Outside of work I build multiplayer games. Both of these run online, and you can{' '}
              <button onClick={() => openArcade()} className="link text-ink">play them here</button>.
            </>
          }
        />

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {featured.map((p, i) => (
            <Feature key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow mb-4">More projects</p>
          <ul className="border-t border-ink">
            {rest.map((p) => (
              <Row key={p.id} project={p} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Feature({ project, index }: { project: Project; index: number }) {
  const { openArcade } = useArcade()
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <button onClick={() => project.playId && openArcade(project.playId)} className="group block w-full overflow-hidden bg-sheet text-left" aria-label={`Play ${project.title}`}>
        <Picture
          name={project.id}
          widths={[640, 960, 1280]}
          width={1280}
          height={720}
          sizes="(min-width: 1152px) 556px, (min-width: 768px) 50vw, 100vw"
          alt={`${project.title} screenshot`}
          className="aspect-[16/10] h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
      </button>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[30px] leading-tight">{project.title}</h3>
        <span className="text-[13px] text-muted">
          {project.kind}, {project.year}
        </span>
      </div>
      <p className="mt-2 max-w-xl text-[15px] leading-[1.7] text-ink/75">{project.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
        <button onClick={() => project.playId && openArcade(project.playId)} className="link font-medium">
          Play in browser
        </button>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link text-ink/70">
            Open full site
          </a>
        )}
        <span className="text-[13px] text-muted">{project.technologies.join(' · ')}</span>
      </div>
    </motion.article>
  )
}

function Row({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.githubUrl ?? project.figmaUrl
  const label = project.liveUrl ? 'Visit' : project.githubUrl ? 'Code' : 'Figma'
  return (
    <li className="group grid gap-2 border-b border-rule py-6 md:grid-cols-[220px_1fr_120px] md:gap-12">
      <div>
        <h3 className="font-serif text-[22px] leading-tight">{project.title}</h3>
        <p className="mt-1 text-[13px] text-muted">
          {project.kind}
          {project.year ? `, ${project.year}` : ''}
        </p>
      </div>
      <div>
        <p className="text-[15px] leading-[1.7] text-ink/75">{project.description}</p>
        <p className="mt-2 text-[13px] text-muted">{project.technologies.join(' · ')}</p>
      </div>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-1 text-[14px] md:justify-end">
          <span className="link">{label}</span>
          <ArrowUpRight size={15} strokeWidth={1.5} className="mt-0.5 text-muted transition group-hover:text-accent" />
        </a>
      )}
    </li>
  )
}
