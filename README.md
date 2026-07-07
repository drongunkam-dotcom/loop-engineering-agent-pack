# Loop Engineering Agent Pack

Codex-only пакет субагентов и проектного протокола для работы по Loop Engineering через GitHub.

Цель проекта — научить Codex работать не как одиночного кодинг-агента, а как команду ролей:

- `loop_planner` — анализирует репозиторий, формирует стратегию и очередь задач;
- `loop_contract_writer` — превращает задачу в проверяемый контракт;
- `loop_maker` — выполняет одну задачу строго по контракту;
- `loop_checker` — независимо проверяет результат Maker-а;
- `loop_architect` — проверяет архитектурные риски и границы изменений;
- `loop_memory` — обновляет статус, решения и отчёты цикла.

Claude-агенты намеренно не включены в текущий MVP.

## Почему это не отдельный LoopHub

Codex уже имеет доступ к GitHub, веткам, diff, PR и файлам проекта. Поэтому отдельный внешний пульт управления не нужен. Этот репозиторий задаёт **протокол и субагентов внутри Codex**, чтобы Codex сам мог создавать задачи, контракты, ревью, стратегию и вести проект через GitHub.

## Что входит в пакет

```text
.codex/
  config.toml
  agents/
    loop-planner.toml
    loop-contract-writer.toml
    loop-maker.toml
    loop-checker.toml
    loop-architect.toml
    loop-memory.toml

.loop/
  PROTOCOL.md
  STATUS.md
  DECISIONS.md
  templates/
    task-contract.md
    task-state.md
    maker-report.md
    checker-report.md
    architecture-report.md
    memory-update.md

templates/
  AGENTS.codex.md

docs/
  CODEX_INSTALL.md
  OPERATING_MODEL.md
```

## Быстрая установка в проект

1. Скопируй в целевой репозиторий папку `.codex/`.
2. Скопируй в целевой репозиторий папку `.loop/`.
3. Скопируй `templates/AGENTS.codex.md` в корень целевого проекта как `AGENTS.md`.
4. Открой целевой проект в Codex Desktop.
5. Попроси Codex:

```text
Используй Loop Engineering Agent Pack. Запусти loop_planner: проанализируй репозиторий, создай стартовую стратегию, очередь задач и первый task contract в .loop/tasks/.
```

## Базовый цикл

```text
loop_planner → loop_contract_writer → loop_maker → loop_checker → loop_architect → loop_memory → human approval
```

Главное правило:

```text
Maker не ставит DONE. Checker не исправляет код. Финальное решение принимает человек или явно назначенный координатор.
```

## Основа

Пакет опирается на Codex project-scoped custom agents через `.codex/agents/` и project instructions через `AGENTS.md`.
