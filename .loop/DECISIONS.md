# Decisions

Durable project decisions are recorded here.

## 2026-07-07 — Codex-first MVP

Decision: The first version of the pack targets Codex only.

Reason: Андрей currently works through Codex Desktop and has paused Claude usage because the Claude subscription is unavailable.

Impact:

- Create `.codex/agents/*.toml` first.
- Do not add `.claude/agents/` yet.
- Keep the protocol tool-agnostic enough to add Claude later.

## 2026-07-07 — No external LoopHub app in MVP

Decision: Do not create a separate LoopHub application yet.

Reason: Codex already has GitHub access and can operate inside the repository. The useful first product is a subagent pack and protocol, not an external orchestration app.

Impact:

- Use GitHub repository files as the coordination layer.
- Use `.loop/` as shared external memory.
- Use Codex custom agents as the execution roles.

## 2026-07-07 — Maker cannot mark DONE

Decision: Maker agents may implement work but may not mark tasks DONE.

Reason: The same agent that created a change is likely to be too loyal to its own output.

Impact:

- Checker produces PASS, FAIL, or NEEDS_HUMAN_REVIEW.
- Final DONE requires human approval unless a project explicitly changes this rule.
