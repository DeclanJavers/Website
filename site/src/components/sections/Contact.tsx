const EMAIL = 'declanjavers@gmail.com'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/declan-javers' },
  { label: 'GitHub', href: 'https://github.com/DeclanJavers' },
  { label: 'Résumé (PDF, 57 KB)', href: '/Declan_Javers_Resume.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-page border-t border-ink pt-12">
        <p className="eyebrow mb-6">04 · Contact</p>
        <h2 className="max-w-3xl font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.02em]">
          Get in touch. Email is the best way to reach me.
        </h2>
        <a href={`mailto:${EMAIL}`} className="mt-10 inline-block font-serif text-[clamp(1.5rem,3.4vw,2.4rem)] italic text-accent underline decoration-accent/30 decoration-1 underline-offset-8 transition hover:decoration-accent">
          {EMAIL}
        </a>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
              {l.label}
            </a>
          ))}
          <span className="text-muted">301-642-3823</span>
        </div>
      </div>
    </section>
  )
}
