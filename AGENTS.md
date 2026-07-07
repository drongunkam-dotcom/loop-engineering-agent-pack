# AGENTS.md — Loop Engineering Agent Pack

## Repository mission

This repository contains a Codex-only Loop Engineering Agent Pack.

The pack does not replace Codex. It teaches Codex to work through explicit roles, task contracts, checker reports, project memory, and human approval.

## Current scope

Included:

- Codex custom agents in `.codex/agents/`.
- Shared Loop Engineering protocol in `.loop/`.
- Templates for task contracts, task states, maker reports, checker reports, architecture reports, and memory updates.
- Installation instructions for target repositories.

Excluded for MVP:

- Claude agents.
- External LoopHub application.
- CLI installer.
- Web UI.
- Automerge.
- Autonomous production deployment.

## Working rules for Codex

1. Work in small, reviewable changes.
2. Do not add Claude-specific files unless Андрей explicitly asks.
3. Do not convert this repository into an application before the agent pack is stable.
4. Keep every role narrow and opinionated.
5. Prefer Markdown and TOML over code unless an installer is explicitly requested.
6. Preserve the distinction between:
   - `planner` — creates strategy and tasks;
   - `contract_writer` — creates task contracts;
   - `maker` — implements one task;
   - `checker` — reviews and reports, but does not fix;
   - `architect` — audits structural risk;
   - `memory` — updates project state.
7. Do not let Maker mark tasks as DONE.
8. Do not let Checker edit product code.
9. Use `.loop/` as the shared state and protocol layer.
10. When modifying instructions, explain why the change improves agent coordination.

## Validation expectations

For documentation-only changes:

- Check Markdown structure manually.
- Ensure file names in README match actual files.
- Ensure agent names in TOML are consistent with docs.

For future code changes:

- Add tests before claiming readiness.
- Do not invent test results.
