import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const assetAgentPath = path.join(packageRoot, "assets", "codex-agents", "loop-orchestrator.toml");

export function getCodexAgentsDir() {
  return path.join(os.homedir(), ".codex", "agents");
}

export async function installGlobalAgent({ force = false, dryRun = false } = {}) {
  const agentsDir = getCodexAgentsDir();
  const targetPath = path.join(agentsDir, "loop-orchestrator.toml");

  if (dryRun) {
    console.log(`[dry-run] ${assetAgentPath} -> ${targetPath}`);
    return;
  }

  await fs.mkdir(agentsDir, { recursive: true });

  const exists = await pathExists(targetPath);
  if (exists && !force) {
    console.log(`Уже установлен: ${targetPath}`);
    console.log("Для перезаписи используй: npx loop-engineering-agent-pack install --force");
    return;
  }

  await fs.copyFile(assetAgentPath, targetPath);
  console.log(`Установлено: ${targetPath}`);
  console.log("");
  console.log("Теперь открой любой проект в Codex Desktop и напиши:");
  console.log("");
  console.log("Используй `loop_orchestrator`. Возьми управление проектом по Loop Engineering. Если `.loop/` и `AGENTS.md` ещё не созданы — создай их. Затем проанализируй репозиторий, создай стартовый план, первую задачу и остановись перед реализацией.");
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
