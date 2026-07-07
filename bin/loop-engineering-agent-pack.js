#!/usr/bin/env node

import { installGlobalAgent } from "../src/install-global-agent.js";

const args = process.argv.slice(2);
const command = args[0];

function printHelp() {
  console.log(`
Loop Engineering Agent Pack

Команды:
  install      Установить loop_orchestrator в ~/.codex/agents/
  where        Показать путь установки

Примеры:
  npx loop-engineering-agent-pack install
  npx leap install
  npx leap where
`);
}

if (!command || command === "--help" || command === "-h") {
  printHelp();
  process.exit(0);
}

if (command === "install") {
  await installGlobalAgent({
    force: args.includes("--force"),
    dryRun: args.includes("--dry-run")
  });
  process.exit(0);
}

if (command === "where") {
  const { getCodexAgentsDir } = await import("../src/install-global-agent.js");
  console.log(getCodexAgentsDir());
  process.exit(0);
}

console.error(`Неизвестная команда: ${command}`);
printHelp();
process.exit(1);
