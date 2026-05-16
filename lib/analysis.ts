import { promises as fs } from "fs"
import path from "path"

const DATA_DIR = process.cwd()

export async function loadExecutiveSummary(): Promise<string> {
  const filePath = path.join(
    DATA_DIR,
    "platform-analysis-output",
    "executive-summary.md"
  )
  try {
    const data = await fs.readFile(filePath, "utf-8")
    return data
  } catch (error) {
    return "# Analysis Summary\n\nNo executive summary available yet."
  }
}

export async function loadAnalysisInventory(): Promise<{name: string, size: number}[]> {
  const analysisDir = path.join(DATA_DIR, "platform-analysis-output")
  try {
    const files = await fs.readdir(analysisDir)
    const inventory = []
    
    for (const file of files) {
      if (file.endsWith(".csv") || file.endsWith(".json")) {
        const stats = await fs.stat(path.join(analysisDir, file))
        inventory.push({
          name: file,
          size: stats.size
        })
      }
    }
    return inventory.sort((a, b) => b.size - a.size)
  } catch (error) {
    return []
  }
}
