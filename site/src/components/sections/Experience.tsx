'use client'

import { motion } from 'framer-motion'
import { education, roles } from '@/data/experience'
import type { Role } from '@/types'

export function SectionHead({ n, title, aside }: { n: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-3 border-t border-ink pt-5 md:mb-16 md:flex-row md:items-baseline md:justify-between">
      <h2 className="flex items-baseline gap-4 font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-none tracking-[-0.015em]">
        <span className="font-sans text-[12px] font-semibold tracking-[0.18em] text-muted">{n}</span>
        {title}
      </h2>
      {aside && <div className="max-w-sm text-[14px] leading-relaxed text-muted md:text-right">{aside}</div>}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHead n="01" title="Experience" />
        <div className="divide-y divide-rule">
          {roles.map((r, i) => (
            <Entry key={r.id} role={r} index={i} />
          ))}
        </div>

        <div className="mt-4 grid gap-6 border-t border-ink pt-8 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <p className="eyebrow">Education</p>
            <p className="mt-2 text-[14px] text-muted">{education.grad}</p>
          </div>
          <div>
            <h3 className="font-serif text-[26px] leading-tight">Northeastern University</h3>
            <p className="mt-1 text-[15px] text-ink/75">{education.degree}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              <span className="text-ink/80">Coursework:</span> {education.coursework.join(', ')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Entry({ role, index }: { role: Role; index: number }) {
  const minor = role.steps.length < 4
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className="grid gap-6 py-10 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12 md:py-14"
    >
      <div className="text-[14px] leading-relaxed text-muted">
        <p className="text-ink/85">{role.dates}</p>
        <p>{role.place}</p>
      </div>

      <div>
        <h3 className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-tight tracking-[-0.01em]">{role.org}</h3>
        <p className="mt-1 text-[15px] text-ink/70">{role.role}</p>

        <ol className={`mt-6 grid gap-x-10 gap-y-6 ${minor ? 'sm:grid-cols-2 lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
          {role.steps.map((s, i) => (
            <li key={s.title} className="border-t border-rule pt-4">
              <p className="text-[15px] leading-[1.65] text-ink/75">
                <span className="mr-2 font-sans text-[12px] font-semibold tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-medium text-ink">{s.title}</span> {s.detail}
              </p>
            </li>
          ))}
        </ol>

        {(role.result || role.tools.length > 0) && (
          <div className="mt-8 flex flex-col gap-4 border-l-2 border-accent pl-5 md:flex-row md:items-baseline md:justify-between md:gap-10">
            {role.result && (
              <p className="max-w-xl text-[15px] leading-relaxed">
                <span className="eyebrow mr-2 text-accent">Result</span>
                {role.result}
              </p>
            )}
            {role.tools.length > 0 && <p className="shrink-0 text-[13px] text-muted md:max-w-[16rem] md:text-right">{role.tools.join(' · ')}</p>}
          </div>
        )}
      </div>
    </motion.article>
  )
}
