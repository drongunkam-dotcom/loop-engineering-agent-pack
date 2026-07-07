# Codex Self-Install Prompt

Use this prompt in Codex Desktop when you want Codex to install this pack into another repository.

```text
You are installing the Loop Engineering Agent Pack into this repository.

Source package:
- Copy the Codex custom agents from loop-engineering-agent-pack/.codex/agents/.
- Copy the Codex config from loop-engineering-agent-pack/.codex/config.toml.
- Copy the Loop protocol and templates from loop-engineering-agent-pack/.loop/.
- Copy loop-engineering-agent-pack/templates/AGENTS.codex.md into this repository as AGENTS.md, unless AGENTS.md already exists. If it exists, merge the Loop Engineering rules into it instead of overwriting.

Installation requirements:
1. Create or update `.codex/config.toml`.
2. Create or update `.codex/agents/` with the Loop Engineering agents.
3. Create or update `.loop/PROTOCOL.md`, `.loop/STATUS.md`, `.loop/DECISIONS.md`, `.loop/templates/`, and `.loop/tasks/README.md`.
4. Create or merge `AGENTS.md`.
5. Do not modify product code during installation.
6. After installation, summarize installed files and recommend running loop_planner.

After installation, run this verification prompt:

Summarize the active AGENTS.md instructions, list available Loop Engineering agents, and confirm that `.loop/PROTOCOL.md` is present.
```
