'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useArcade } from '@/context/ArcadeContext'

const nav = [
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openArcade } = useArcade()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${scrolled || open ? 'border-rule bg-paper/95 backdrop-blur' : 'border-transparent bg-paper'}`}>
      <div className="px-5 sm:px-8"><div className="mx-auto flex h-16 max-w-page items-center justify-between">
        <a href="#top" className="font-serif text-[22px] leading-none tracking-tight">
          Declan Javers
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[14px] md:flex">
          {nav.map((i) => (
            <a key={i.name} href={i.href} className="text-ink/75 transition-colors hover:text-ink">
              {i.name}
            </a>
          ))}
          <button onClick={() => openArcade()} className="text-ink/75 transition-colors hover:text-ink">
            Games
          </button>
          <a href="/Declan_Javers_Resume.pdf" target="_blank" title="Résumé (PDF, 57 KB)" className="rounded-full border border-ink/80 px-4 py-1.5 transition-colors hover:bg-ink hover:text-paper">
            Résumé<span className="sr-only"> (PDF, 57 KB)</span>
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="-mr-2 p-2 md:hidden" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div></div>

      {open && (
        <nav aria-label="Main" id="mobile-menu" className="border-t border-rule px-5 pb-6 pt-2 md:hidden">
          {nav.map((i) => (
            <a key={i.name} href={i.href} onClick={() => setOpen(false)} className="block border-b border-rule py-3.5 font-serif text-2xl">
              {i.name}
            </a>
          ))}
          <button onClick={() => { setOpen(false); openArcade() }} className="block w-full border-b border-rule py-3.5 text-left font-serif text-2xl">
            Games
          </button>
          <a href="/Declan_Javers_Resume.pdf" target="_blank" className="mt-5 inline-block rounded-full border border-ink px-5 py-2 text-sm">
            Résumé (PDF, 57 KB)
          </a>
        </nav>
      )}
    </header>
  )
}
