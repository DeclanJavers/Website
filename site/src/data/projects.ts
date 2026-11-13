import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'pulse-pitch',
    title: 'Pulse Pitch',
    kind: 'Multiplayer game + RL',
    year: '2026',
    description:
      'Browser arena football with online 2v2 to 4v4 on an authoritative WebSocket server, and AI teammates trained with behavior cloning and PPO self-play.',
    technologies: ['TypeScript', 'React', 'WebSockets', 'Python', 'PPO'],
    liveUrl: 'https://pulse.declanjavers.com',
    playId: 'pulse-pitch',
  },
  {
    id: 'broadside',
    title: 'Broadside',
    kind: 'Multiplayer game',
    year: '2026',
    description:
      'Crew a sailing ship with friends, one station each. Headless game rooms on AWS stream snapshots to browser, Mac and Windows players in the same match.',
    technologies: ['Godot 4', 'Python', 'AWS', 'WebSockets'],
    liveUrl: 'https://ship.declanjavers.com',
    playId: 'broadside',
  },
  {
    id: 'tidesworn',
    title: 'Tidesworn',
    kind: 'Generative AI pipeline',
    year: '2026',
    description:
      'An open-source pipeline that turns text prompts into game-ready 3D assets for a Catan-inspired multiplayer Unity game: Z-Image text-to-image into Trellis image-to-3D.',
    technologies: ['Unity', 'Z-Image', 'Trellis', 'Colab'],
    liveUrl: 'https://declanjavers.itch.io/tidesworn',
  },
  {
    id: 'murder-on-game-nite',
    title: 'Murder on Game Nite',
    kind: 'Team project',
    year: '2026',
    description:
      'Real-time Werewolf-style game on a turn-based engine. An invisible server-side host pushes timer events through the same move pipeline as real players.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io'],
    githubUrl: 'https://github.com/neu-cs4530/spring26-project-group-507',
    liveUrl: 'https://spring26-project-group-507.onrender.com/',
  },
  {
    id: 'linkup',
    title: 'LinkUp',
    kind: 'HCI prototype',
    year: '',
    description:
      'High-fidelity Figma prototype that helps busy college students set up low-effort hangouts through structured, swipe-based requests. Built from rounds of interviews and usability tests.',
    technologies: ['Figma', 'UX research', 'User testing'],
    figmaUrl:
      'https://www.figma.com/design/OwbRXJ29kaxgUBaGHN7Ot7/LinkUp-High-Fidelity-Prototype?node-id=0-1&p=f&t=igNkGZxtgPBb1Arh-0',
  },
  {
    id: 'reversi',
    title: 'Reversi',
    kind: 'OOD',
    year: '2025',
    description: 'Hex and square board Reversi in Java on Decorator, Observer and MVC, with a minimax AI opponent and a JUnit suite.',
    technologies: ['Java', 'Design patterns', 'JUnit'],
    githubUrl: 'https://github.com/DeclanJavers/Reversi',
  },
]
