'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { GameId } from '@/data/games'

interface ArcadeState {
  open: GameId | null
  openArcade: (game?: GameId) => void
  closeArcade: () => void
}

const ArcadeContext = createContext<ArcadeState | undefined>(undefined)

export function ArcadeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<GameId | null>(null)
  const openArcade = useCallback((game: GameId = 'pulse-pitch') => setOpen(game), [])
  const closeArcade = useCallback(() => setOpen(null), [])
  return <ArcadeContext.Provider value={{ open, openArcade, closeArcade }}>{children}</ArcadeContext.Provider>
}

export function useArcade() {
  const ctx = useContext(ArcadeContext)
  if (!ctx) throw new Error('useArcade must be used inside ArcadeProvider')
  return ctx
}
