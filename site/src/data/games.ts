export type GameId = 'pulse-pitch' | 'broadside'

export interface Game {
  id: GameId
  title: string
  tagline: string
  url: string
  image: string
  controls: string[]
  blurb: string
  built: string[]
  stack: string[]
}

export const games: Game[] = [
  {
    id: 'pulse-pitch',
    title: 'Pulse Pitch',
    tagline: 'Arena football, 2v2 to 4v4, online.',
    url: 'https://pulse.declanjavers.com',
    image: '/images/pulse-pitch-1280.webp',
    controls: ['Arrows: move', 'Space: bounce, right as you touch the puck'],
    blurb:
      'A browser arcade sports game with online matches on an authoritative WebSocket server, a full local career mode, and AI teammates trained with reinforcement learning.',
    built: [
      '60 Hz server simulation, 30 Hz snapshots, client prediction and reconciliation, mid-match rejoin',
      'One simulation module shared by browser and server, so physics never drifts',
      'RL pipeline on a NumPy copy of the sim, parity-tested to 1e-6 per tick: behavior cloning on 2M samples, then PPO self-play',
      'Passwordless email sign-in and cloud saves on Cloudflare Workers + D1',
    ],
    stack: ['TypeScript', 'React', 'WebSockets', 'Python', 'PPO', 'Cloudflare'],
  },
  {
    id: 'broadside',
    title: 'Broadside',
    tagline: 'Crew a ship. Duel, or 25 ships in a closing storm.',
    url: 'https://ship.declanjavers.com',
    image: '/images/broadside-1280.webp',
    controls: ['WASD: walk the deck', 'E: take a station (helm, sheet, guns)'],
    blurb:
      'A multiplayer sailing battle game where every crew member works a station on the same ship. Plays in the browser, on Mac and on Windows, all in the same online rooms.',
    built: [
      'Each room is a headless copy of the game on AWS Lightsail, streaming snapshots over WebSockets',
      'Room manager, Caddy for HTTPS and routing, rooms close themselves when empty',
      'Six-digit emailed sign-in codes, only hashes stored, profiles that follow you across devices',
      'Bots fill any place no friend takes, at three difficulty levels',
    ],
    stack: ['Godot 4', 'GDScript', 'Python', 'AWS Lightsail', 'Caddy', 'SQLite'],
  },
]
