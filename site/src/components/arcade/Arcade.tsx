'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, Play, RotateCcw, X } from 'lucide-react'
import { useArcade } from '@/context/ArcadeContext'
import { games, type Game } from '@/data/games'

// The pop-out that replaced Chess Corner: Pulse Pitch and Broadside, playable in place.
export default function Arcade() {
  const { open, openArcade, closeArcade } = useArcade()
  const game = games.find((g) => g.id === open) ?? null

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeArcade()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeArcade])

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Games"
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" onClick={closeArcade} />
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 1] }}
            className="relative flex max-h-[100svh] w-full max-w-6xl flex-col overflow-hidden bg-paper shadow-[0_30px_80px_-30px_rgba(28,27,25,.45)] sm:max-h-[92vh]"
          >
            <div className="flex items-center justify-between border-b border-rule px-5 sm:px-7">
              <div className="flex gap-7">
                {games.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => openArcade(g.id)}
                    className={`-mb-px border-b-2 py-4 font-serif text-[20px] transition-colors ${g.id === game.id ? 'border-ink text-ink' : 'border-transparent text-muted hover:text-ink'}`}
                  >
                    {g.title}
                  </button>
                ))}
              </div>
              <button onClick={closeArcade} className="-mr-2 p-2 text-muted transition hover:text-ink" aria-label="Close">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <Cabinet key={game.id} game={game} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Cabinet({ game }: { game: Game }) {
  const [running, setRunning] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [nonce, setNonce] = useState(0)
  const frame = useRef<HTMLIFrameElement>(null)

  return (
    <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1fr_330px] lg:overflow-hidden">
      <div className="relative bg-ink lg:min-h-0">
        <div className="relative aspect-[16/9] w-full lg:aspect-auto lg:h-full lg:min-h-[500px]">
          {running ? (
            <>
              <iframe
                ref={frame}
                key={nonce}
                src={game.url}
                title={game.title}
                allow="fullscreen; autoplay; gamepad; clipboard-write"
                className="absolute inset-0 h-full w-full"
                onLoad={() => {
                  setLoaded(true)
                  frame.current?.focus()
                }}
              />
              {!loaded && (
                <div className="pointer-events-none absolute inset-0 grid place-items-center bg-ink text-[14px] text-paper/70">
                  Loading {game.title}…
                </div>
              )}
            </>
          ) : (
            <button onClick={() => setRunning(true)} className="group absolute inset-0 block w-full" aria-label={`Start ${game.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={game.image} alt="" width={1280} height={720} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:opacity-95" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="flex items-center gap-3 rounded-full bg-paper px-6 py-3 text-[15px] font-medium text-ink shadow-lg transition group-hover:scale-[1.03]">
                  <Play size={16} fill="currentColor" /> Play {game.title}
                </span>
              </span>
            </button>
          )}
        </div>
      </div>

      <aside className="flex flex-col gap-6 border-t border-rule p-6 lg:overflow-y-auto lg:border-l lg:border-t-0">
        <div>
          <p className="font-serif text-[22px] italic leading-snug">{game.tagline}</p>
          <p className="mt-3 text-[15px] leading-[1.65] text-ink/75">{game.blurb}</p>
        </div>

        <div className="border-t border-rule pt-4">
          <p className="eyebrow mb-2">Controls</p>
          <ul className="space-y-1 text-[14px] text-ink/80">
            {game.controls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-2 text-[13px] text-muted">Needs a keyboard. If keys stop responding, click inside the game.</p>
        </div>

        <div className="border-t border-rule pt-4">
          <p className="eyebrow mb-2">How it&apos;s built</p>
          <ul className="space-y-2.5 text-[14px] leading-snug text-ink/80">
            {game.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-[13px] text-muted">{game.stack.join(' · ')}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-4 text-[14px]">
          {running && (
            <>
              <button onClick={() => frame.current?.requestFullscreen?.()} className="flex items-center gap-1.5 text-ink/80 hover:text-ink">
                <Maximize2 size={14} strokeWidth={1.5} /> Full screen
              </button>
              <button
                onClick={() => {
                  setLoaded(false)
                  setNonce((n) => n + 1)
                }}
                className="flex items-center gap-1.5 text-ink/80 hover:text-ink"
              >
                <RotateCcw size={14} strokeWidth={1.5} /> Restart
              </button>
            </>
          )}
          <a href={game.url} target="_blank" rel="noopener noreferrer" className="link">
            Open in a new tab
          </a>
        </div>
      </aside>
    </div>
  )
}
