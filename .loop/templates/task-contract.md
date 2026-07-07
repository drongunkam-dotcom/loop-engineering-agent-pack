# Task Contract: task-XXX-title

## Task id

task-XXX-title

## Title

TODO

## Goal

TODO: Describe the exact observable result.

## Background

TODO: Provide only the context needed for this task.

## Scope

Allowed files or folders:

- TODO

## Forbidden

Do not:

- change files outside Scope;
- expand the feature beyond the contract;
- add unrelated cleanup;
- mark the task DONE from Maker role.

## Done criteria

The task is complete when:

- [ ] TODO
- [ ] Required checks pass or are explicitly reported as not run with reason.
- [ ] Maker report exists.
- [ ] Checker report exists.

## Required checks

- TODO: command or manual check

## Iteration limit

Maximum Maker iterations: TODO

## Stop factors

Stop and request human review if:

- scope becomes unclear;
- files outside Scope are needed;
- required checks cannot be run;
- implementation requires a larger design decision.

## Expected Maker output

- Changed files list.
- Checks run and results.
- Known limitations.
- `.loop/tasks/<task-id>/maker-report.md`.

## Expected Checker output

- Verdict: PASS / FAIL / NEEDS_HUMAN_REVIEW.
- `.loop/tasks/<task-id>/checker-report.md`.

## Human approval

Final DONE requires human approval unless the repository explicitly defines a different rule.
