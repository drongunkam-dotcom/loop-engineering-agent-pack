# Operating Model

## Product definition

Loop Engineering Agent Pack is not an external app. It is a Codex subagent pack plus a repository protocol.

The target operating model is:

```text
GitHub repository = shared workspace
.loop/ = project memory and coordination protocol
.codex/agents/ = active Codex roles
AGENTS.md = persistent project instructions
Human owner = final approval
```

## Why this shape

Codex can already access GitHub, branches, diffs, pull requests, and repository files. Therefore, the useful layer is not another tool that talks to Codex. The useful layer is a set of roles inside Codex itself.

## Main loop

```text
1. loop_planner defines strategy and tasks.
2. loop_contract_writer creates a bounded task contract.
3. loop_maker implements exactly one contract.
4. loop_checker independently verifies the result.
5. loop_architect audits structure when needed.
6. loop_memory updates shared state.
7. Human owner approves final DONE.
```

## Responsibility split

| Role | Can change code? | Can create tasks? | Can approve DONE? |
|---|---:|---:|---:|
| loop_planner | No | Yes | No |
| loop_contract_writer | No | Contract only | No |
| loop_maker | Yes, within Scope | No | No |
| loop_checker | No | No | No |
| loop_architect | No | Recommendations only | No |
| loop_memory | No | No | Only with explicit human decision |
| Human owner | Yes | Yes | Yes |

## First maturity level

The MVP should stay at controlled human approval:

- no automerge;
- no unattended production changes;
- no hidden task expansion;
- no broad refactors without explicit contract;
- no task completion without independent checking.

## Future additions

Possible later additions:

- Claude agent pack;
- GitHub issue templates;
- installer script;
- example target repository;
- CI checks for TOML validity;
- LoopHub UI only after the protocol proves useful.
