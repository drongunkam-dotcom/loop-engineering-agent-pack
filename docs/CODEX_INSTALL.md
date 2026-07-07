# Codex Install Guide

This guide installs the Codex-only Loop Engineering Agent Pack into a target repository.

## Install files

Copy these folders/files from this repository into the target repository:

```text
.codex/
.loop/
templates/AGENTS.codex.md -> AGENTS.md
```

If the target repository already has an `AGENTS.md`, merge the contents manually instead of overwriting it.

## Verify in Codex Desktop

1. Open the target repository in Codex Desktop.
2. Start a new thread.
3. Ask Codex:

```text
Summarize the active project instructions and list available Loop Engineering agents.
```

Expected:

- Codex should read `AGENTS.md`.
- Codex should see the `.codex/agents/` custom agents.
- Codex should understand `.loop/PROTOCOL.md` as the project coordination protocol.

## First run

Use this prompt in Codex Desktop:

```text
Use loop_planner. Analyze this repository and create the first Loop Engineering plan. Create or update .loop/STATUS.md, .loop/DECISIONS.md if needed, and create the first task folder under .loop/tasks/. Do not modify product code.
```

Then run:

```text
Use loop_contract_writer. Take the first READY_FOR_CONTRACT task and create a precise contract.md and state.md.
```

Then run implementation:

```text
Use loop_maker. Execute the active task contract strictly within Scope. Write maker-report.md. Do not mark DONE.
```

Then run independent review:

```text
Use loop_checker. Review the current diff or PR against the active task contract. Do not edit product code. Write checker-report.md with PASS, FAIL, or NEEDS_HUMAN_REVIEW.
```

Finally:

```text
Use loop_memory. Update task state and .loop/STATUS.md based on the checker verdict and human decision.
```

## Notes

- Claude files are not included in this MVP.
- This pack does not require a separate LoopHub application.
- GitHub and the repository are the shared workspace.
- `.loop/` is the memory and protocol layer.
- Codex subagents are the active roles.
