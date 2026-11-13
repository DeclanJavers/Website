import type { Role } from '@/types'

// Each role reads as: the problem, what I did, and what came of it.
export const roles: Role[] = [
  {
    id: 'zeta',
    org: 'Zeta Global',
    role: 'Core AI Engineer Intern',
    place: 'New York, NY',
    dates: 'June – August 2026',
    problem: 'A production AI agent was failing in ways it didn’t report.',
    steps: [
      {
        title: 'Found where it failed.',
        detail: 'Classified production LangSmith traces into three recurring failure types: tools that broke but still reported success, bad tool parameters, and tools called out of order. The labeled dataset set fix priority and became the baseline for measuring improvement.',
      },
      {
        title: 'Fixed the agent’s tools and instructions.',
        detail: 'Rewrote tool descriptions and schemas and wrote agent instructions and skills, spelling out each tool’s purpose, inputs, outputs, and when not to use it.',
      },
      {
        title: 'Made the fixes measurable.',
        detail: 'Built smoke, regression, and progression evaluation suites with custom Python evaluators and promptfoo that check backend state instead of trusting a successful reply. Progression tests that pass consistently are promoted into regression, so new abilities can’t silently break.',
      },
      {
        title: 'Cleaned up the infrastructure.',
        detail: 'Split one large MCP server into two focused FastMCP servers on AWS Bedrock AgentCore, sharing tool code from one internal package, and fixed the platform SDK’s local evaluation pipeline so trajectory evaluators grade real agent runs instead of empty traces.',
      },
    ],
    result: 'An improvement loop the team can run in production, which I presented along with a handoff plan.',
    tools: ['Python', 'LangSmith', 'promptfoo', 'MCP', 'FastMCP', 'AWS Bedrock AgentCore'],
  },
  {
    id: 'capitol',
    org: 'Capitol AI',
    role: 'Software Engineer Intern',
    place: 'Washington, DC',
    dates: 'May 2025 – May 2026',
    problem: 'An enterprise client’s document-generation agent, running in its own EU tenant on Claude Opus, needed to pass user acceptance testing.',
    steps: [
      {
        title: 'Fixed what the client flagged in testing.',
        detail: 'Inconsistent output between runs, missing chart axes, and overlapping text. I tightened the prompt and skill files, pinned the model to Claude Opus 4.6, and added citation rules tested across seven output formats.',
      },
      {
        title: 'Made the agent the client’s own.',
        detail: 'Rewrote the descriptions of 13 agent tools and separated white-label themes by tenant, so the client’s agent used its own labels and branding.',
      },
      {
        title: 'Shipped across the stack.',
        detail: 'React and TypeScript features and FastAPI endpoints across the consumer product and the visual composer where users build their own agents, plus a Playwright end-to-end test harness covering eight services.',
      },
      {
        title: 'Took it to production.',
        detail: 'Coordinated deployments with the client’s engineering leads and our backend engineer, working directly with the founders and CTO.',
      },
    ],
    result: 'The client’s agent passed acceptance testing and shipped to production.',
    tools: ['TypeScript', 'React', 'FastAPI', 'Anthropic API', 'RAG', 'Playwright'],
  },
  {
    id: 'khoury',
    org: 'Khoury College, Northeastern',
    role: 'Web Content Coordinator Co-op',
    place: 'Boston, MA',
    dates: 'June – December 2024',
    problem: 'The college was launching a redesigned website.',
    steps: [
      { title: 'Built the pages.', detail: 'Built and managed WordPress pages for the launch.' },
      { title: 'Automated the upkeep.', detail: 'Wrote Python scripts to handle repetitive content updates.' },
      { title: 'Tested it with people.', detail: 'Ran UX research, A/B tests, and accessibility audits that found and fixed usability problems.' },
    ],
    result: 'A launched site and a faster way to keep it current.',
    tools: ['WordPress', 'Python', 'UX research', 'Accessibility'],
  },
]

export const education = {
  school: 'Northeastern University, Khoury College of Computer Sciences',
  degree: 'B.S. Computer Science, concentration in Artificial Intelligence',
  grad: 'December 2026',
  coursework: ['Foundations of AI (graduate)', 'Fundamentals of Software Engineering', 'Algorithms and Data Structures', 'Object-Oriented Design'],
}
