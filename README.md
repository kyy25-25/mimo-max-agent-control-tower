# MiMo Max Agent Control Tower

A new Max-level Xiaomi MiMo Orbit grant project: a multi-agent control tower for planning, monitoring, auditing, and exporting proof of AI-driven workflows.

## Why this is Max-level

- Multi-agent architecture, not a simple chatbot wrapper.
- Demonstrates repeatable AI workflow orchestration.
- Includes audit layer: risk, privacy, confidence, and evidence quality.
- Produces proof artifacts useful for grant review.
- Can integrate Xiaomi MiMo API through a backend adapter.

## Run

```bash
npm install
npm run dev
npm run build
```

## Agent Pipeline

1. Intake Agent — converts raw requests into mission briefs.
2. Planner Agent — creates milestones, owners, risks, and acceptance tests.
3. Executor Agent — generates implementation artifacts and API-ready actions.
4. Auditor Agent — checks safety, privacy, evidence quality, and impact.
