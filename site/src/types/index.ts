export interface Project {
  id: string
  title: string
  kind: string
  year: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  figmaUrl?: string
  playId?: 'pulse-pitch' | 'broadside'
}

export interface Step {
  title: string
  detail: string
}

export interface Role {
  id: string
  org: string
  role: string
  place: string
  dates: string
  problem: string
  steps: Step[]
  result: string
  tools: string[]
}
