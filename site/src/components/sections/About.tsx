import { skillGroups } from '@/data/skills'
import { SectionHead } from './Experience'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-page">
        <SectionHead n="03" title="About" />
        <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <div className="space-y-6 font-serif text-[21px] leading-[1.6] text-ink/90">
            <p>
              I&apos;m a computer science student at Northeastern, concentrating in artificial intelligence, and I graduate in
              December 2026. I grew up in Bethesda, Maryland, and came to Boston for the co-op program.
            </p>
            <p>
              The work I care about most is checking whether a system actually does what it says. At Zeta that meant
              evaluations that verify backend state instead of trusting an agent&apos;s reply. In my own projects it means
              holding a Python copy of a game&apos;s physics to within a millionth of the original before training a
              single policy on it.
            </p>
            <p className="text-ink/65">Outside of work: soccer, the gym, cooking, and reading.</p>
          </div>

          <dl className="space-y-7">
            {skillGroups.map((g) => (
              <div key={g.label} className="border-t border-rule pt-4">
                <dt className="eyebrow mb-2">{g.label}</dt>
                <dd className="text-[15px] leading-[1.75] text-ink/80">{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
