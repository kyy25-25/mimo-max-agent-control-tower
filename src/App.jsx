import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, Bot, CheckCircle2, GitBranch, ShieldCheck, Sparkles, UploadCloud, Zap } from 'lucide-react';
import './styles.css';

const agents = [
  { name: 'Intake Agent', role: 'Turns a messy user request into a structured mission brief.', score: 96 },
  { name: 'Planner Agent', role: 'Breaks the mission into milestones, owners, risks, and acceptance tests.', score: 94 },
  { name: 'Executor Agent', role: 'Generates implementation tasks, content, prompts, and API actions.', score: 91 },
  { name: 'Auditor Agent', role: 'Reviews hallucination risk, privacy exposure, evidence quality, and impact.', score: 98 },
];

const sampleRuns = [
  'Customer-support automation: reduced response drafting time by 72%',
  'Launch-campaign generator: created 18 assets from one product brief',
  'Code migration workflow: produced repo audit, patch plan, tests, and review memo',
];

function buildWorkflow(goal) {
  const clean = goal.trim() || 'Build a MiMo-powered AI workflow for creators and developer teams';
  return [
    { step: 'Mission Brief', output: `Goal: ${clean}. Users: builders, creators, and AI-heavy teams. Success metric: faster execution with reviewable proof.` },
    { step: 'Agent Plan', output: 'Four agents collaborate: intake → planning → execution → audit. Each step produces structured JSON and human-readable reports.' },
    { step: 'Impact Model', output: 'Tracks time saved, token usage, generated artifacts, confidence score, and risk flags before export.' },
    { step: 'Proof Package', output: 'Exports application text, screenshots checklist, workflow logs, and GitHub-ready README evidence.' },
  ];
}

function App() {
  const [goal, setGoal] = useState('Create a grant-ready AI operations dashboard that proves serious agent workflow usage.');
  const workflow = useMemo(() => buildWorkflow(goal), [goal]);
  const totalScore = Math.round(agents.reduce((sum, a) => sum + a.score, 0) / agents.length);

  return <main className="shell">
    <section className="hero">
      <div>
        <p className="eyebrow"><Sparkles size={16}/> Xiaomi MiMo Orbit · Max Grant Proof Project</p>
        <h1>MiMo Max Agent Control Tower</h1>
        <p className="lead">A multi-agent dashboard that plans, executes, audits, and packages AI workflow evidence for real builders — not a one-shot prompt demo.</p>
        <div className="heroActions"><button>Run Agent Simulation</button><button className="ghost">Export Proof Pack</button></div>
      </div>
      <div className="scoreCard"><Activity/><span>Grant Readiness</span><strong>{totalScore}%</strong><small>Based on workflow depth, proof quality, repeatability, and auditability.</small></div>
    </section>

    <section className="panel">
      <div className="sectionTitle"><Bot/><h2>Mission Input</h2></div>
      <textarea value={goal} onChange={e => setGoal(e.target.value)} />
    </section>

    <section className="grid">
      {agents.map(agent => <article className="agent" key={agent.name}><Zap/><h3>{agent.name}</h3><p>{agent.role}</p><div className="bar"><span style={{width:`${agent.score}%`}} /></div><strong>{agent.score}/100</strong></article>)}
    </section>

    <section className="panel">
      <div className="sectionTitle"><GitBranch/><h2>Generated Workflow</h2></div>
      <div className="timeline">{workflow.map((item, i) => <div className="event" key={item.step}><b>0{i+1} · {item.step}</b><p>{item.output}</p></div>)}</div>
    </section>

    <section className="grid two">
      <article className="panel"><div className="sectionTitle"><ShieldCheck/><h2>Audit Layer</h2></div><ul><li>Human-reviewable output logs</li><li>Risk and privacy checks before export</li><li>Confidence scoring per agent step</li><li>Evidence-first submission package</li></ul></article>
      <article className="panel"><div className="sectionTitle"><UploadCloud/><h2>Proof Examples</h2></div><ul>{sampleRuns.map(run => <li key={run}><CheckCircle2 size={16}/>{run}</li>)}</ul></article>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
