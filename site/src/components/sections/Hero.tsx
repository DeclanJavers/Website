'use client'

import Picture from '@/components/Picture'

const facts = [
  { k: 'Most recently', v: 'Core AI Engineer Intern, Zeta Global' },
  { k: 'Before that', v: 'Software Engineer Intern, Capitol AI' },
  { k: 'Education', v: 'B.S. Computer Science (AI), Northeastern, Dec 2026' },
  { k: 'Based in', v: 'Boston, Massachusetts' },
]

export default function Hero() {
  return (
    <section id="top" className="px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 md:grid-cols-[1fr_280px] md:gap-16 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="rise eyebrow mb-6">
              AI Engineer · Boston
            </p>
            <h1 className="rise [animation-delay:80ms] font-serif text-[clamp(3.2rem,8vw,6.5rem)] font-light leading-[0.98] tracking-[-0.03em]">
              Declan Javers
            </h1>
            <p className="rise [animation-delay:180ms] mt-8 max-w-[38rem] font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light leading-[1.5] text-ink/85">
              I&apos;m a software engineer who works on AI agents. Most recently I was at Zeta Global, building the
              evaluation and improvement loop for an agent in production. Before that I spent a year at Capitol AI, where
              I owned a document-generation agent for an enterprise client through testing and into production.
            </p>
            <div className="rise [animation-delay:260ms] mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              <a href="#experience" className="link">Experience</a>
              <a href="mailto:declanjavers@gmail.com" className="link">declanjavers@gmail.com</a>
              <a href="https://www.linkedin.com/in/declan-javers" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
              <a href="https://github.com/DeclanJavers" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
            </div>
          </div>

          <figure className="rise [animation-delay:200ms] md:self-end">
            <Picture
              name="declan"
              widths={[400, 640, 923]}
              width={923}
              height={1154}
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 100vw"
              alt="Declan Javers"
              className="aspect-[4/5] h-auto w-full object-cover"
              eager
            />
          </figure>
        </div>

        <dl className="rise [animation-delay:340ms] mt-16 grid grid-cols-1 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.k} className={`border-b border-rule py-5 sm:pr-6 lg:border-b-0 ${i > 0 ? 'lg:border-l lg:pl-6' : ''} ${i % 2 === 1 ? 'sm:border-l sm:pl-6 lg:pl-6' : ''}`}>
              <dt className="eyebrow mb-2">{f.k}</dt>
              <dd className="font-serif text-[19px] leading-snug">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
