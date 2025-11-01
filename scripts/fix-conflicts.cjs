const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const backupDir = path.join(repoRoot, '.conflict_backups')

function walk(dir) {
  const results = []
  const list = fs.readdirSync(dir)
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === '.conflict_backups') continue
    const fp = path.join(dir, file)
    const stat = fs.statSync(fp)
    if (stat && stat.isDirectory()) {
      results.push(...walk(fp))
    } else {
      results.push(fp)
    }
  }
  return results
}

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir)

const files = walk(repoRoot).filter(f => {
  const ext = path.extname(f).toLowerCase()
  return ['.ts', '.tsx', '.js', '.cjs', '.css', '.json', '.html'].includes(ext)
})

const conflictRe = /<<<<<<< HEAD\r?\n([\s\S]*?)\r?\n=======\r?\n[\s\S]*?\r?\n>>>>>>>.*(\r?\n)?/g

let fixedCount = 0
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8')
  if (content.includes('<<<<<<< HEAD')) {
    // backup
    const rel = path.relative(repoRoot, f).replace(/\\/g, '/')
    const bkPath = path.join(backupDir, rel.replace(/\//g, '___') + '.bak')
    fs.writeFileSync(bkPath, content, 'utf8')

    const newContent = content.replace(conflictRe, (m, headBlock) => {
      // Trim trailing blank lines from headBlock
      return headBlock.replace(/[\r\n]+$/,'') + '\n'
    })

    fs.writeFileSync(f, newContent, 'utf8')
    console.log('Fixed:', f)
    fixedCount++
  }
}

console.log('Done. Files fixed:', fixedCount)
if (fixedCount === 0) console.log('No conflict markers found.')
