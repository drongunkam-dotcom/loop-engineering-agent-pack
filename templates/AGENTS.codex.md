# AGENTS.md — Loop Engineering enabled project

This repository uses the Loop Engineering Agent Pack for Codex.

## Core workflow

Use the `.loop/` folder as shared project memory and coordination state.

Standard flow:

```text
loop_planner -> loop_contract_writer -> loop_maker -> loop_checker -> loop_architect if needed -> loop_memory -> human approval
```

## Rules for all Codex work

1. Read `.loop/PROTOCOL.md` before starting loop-managed work.
2. Do not implement a task without `.loop/tasks/<task-id>/contract.md`.
3. Work on one task at a time.
4. Respect Scope and Forbidden sections exactly.
5. Do not mark your own work DONE.
6. Write Maker output to `.loop/tasks/<task-id>/maker-report.md`.
7. Checker may write reports but must not edit product code.
8. Durable decisions go into `.loop/DECISIONS.md`.
9. Current project state goes into `.loop/STATUS.md` and task `state.md`.
10. Ask for human review when scope, architecture, or acceptance criteria are unclear.

## Human owner

The default human owner is Андрей unless the repository states otherwise.

## Prompt examples

Planner:

```text
Use loop_planner. Analyze this repository and create a Loop Engineering plan, initial task queue, and first task contract.
```

Maker:

```text
Use loop_maker. Execute .loop/tasks/task-XXX/contract.md strictly within Scope. Write maker-report.md. Do not mark DONE.
```

Checker:

```text
Use loop_checker. Review the current diff or PR against .loop/tasks/task-XXX/contract.md. Do not edit product code. Write checker-report.md.
```

Memory:

```text
Use loop_memory. Update .loop/STATUS.md and the task state based on the checker verdict and human decision.
```
