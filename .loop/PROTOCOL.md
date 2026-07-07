# Loop Engineering Protocol

This protocol defines how Codex agents coordinate work inside one GitHub repository.

## Core idea

The repository is the shared workspace. `.loop/` is the external memory and coordination layer. Codex subagents read and write this layer so the project does not depend on one long chat context.

## Roles

- `loop_planner` creates strategy and task queue.
- `loop_contract_writer` turns a task into a concrete contract.
- `loop_maker` implements exactly one contracted task.
- `loop_checker` reviews Maker output against the contract and does not fix code.
- `loop_architect` audits structure and maintainability risk.
- `loop_memory` updates status, decisions, task state, and handoff notes.

## Required task structure

Each task should live in:

```text
.loop/tasks/task-XXX-short-slug/
  contract.md
  state.md
  maker-report.md
  checker-report.md
  architecture-report.md
  handoff.md
```

Only `contract.md` and `state.md` are required at task creation. Reports are added as work progresses.

## Task states

- `BACKLOG` — task exists but is not ready.
- `READY_FOR_CONTRACT` — task needs a contract.
- `READY_FOR_MAKER` — contract exists and implementation can start.
- `IN_PROGRESS` — Maker is working.
- `READY_FOR_CHECKER` — Maker output is ready for independent review.
- `CHECKING` — Checker is reviewing.
- `NEEDS_FIX` — concrete issues must be fixed.
- `NEEDS_HUMAN_REVIEW` — decision requires Андрей or another human owner.
- `PASS_PENDING_APPROVAL` — checker passed but human approval is still required.
- `DONE` — final accepted state.
- `BLOCKED` — external blocker prevents progress.

## Non-negotiable rules

1. No task may be implemented without a contract.
2. One task equals one focused implementation thread or worktree.
3. Maker must not mark its own task DONE.
4. Checker must not edit product code.
5. Passing tests are evidence, not proof.
6. Structure review may be required even when tests pass.
7. Human approval is required for DONE unless the project owner explicitly relaxes this rule.
8. Major scope changes require HUMAN_REVIEW.
9. Every durable decision goes into `.loop/DECISIONS.md`.
10. Every active status change goes into `.loop/STATUS.md` or task `state.md`.

## Standard loop

```text
plan -> contract -> make -> check -> architecture audit if needed -> memory update -> human approval
```

## Stop factors

Agents must stop and request human review when:

- Scope is unclear.
- Contract is missing or contradictory.
- Required files are unavailable.
- Implementation requires files outside Scope.
- A new dependency is needed.
- Architecture direction is ambiguous.
- Checks cannot be run and the risk is material.
- The change affects high-risk project areas.

## Verdicts

Checker verdicts:

- `PASS`
- `FAIL`
- `NEEDS_HUMAN_REVIEW`

Architecture verdicts:

- `ARCH_PASS`
- `ARCH_WARN`
- `ARCH_FAIL`
- `NEEDS_HUMAN_REVIEW`

## Human owner

The human owner for this operating model is Андрей unless a repository explicitly names another owner.
