# AI Workbench Architecture

An original development environment combining IDE workspace, model routing, engineering agent, GitHub integration, execution, preview and persistent state.

## Monorepo
- apps/web: browser IDE
- apps/api: backend control plane
- packages/shared: domain types
- packages/ai: Gemini, DeepSeek and OpenAI-compatible provider contracts
- packages/agent: engineering-agent state machine
- packages/github: GitHub domain contracts

## Agent lifecycle
DISCOVER → ANALYZE → PLAN → IMPLEMENT → VERIFY → REVIEW → DOCUMENT → REPORT

Provider credentials and GitHub credentials remain server-side.