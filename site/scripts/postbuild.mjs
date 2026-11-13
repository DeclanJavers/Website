// Runs after `next build`: Next's legacy-browser polyfill tag ships without
// async/defer. It only runs in browsers without module support, but give it
// `defer` so nothing on the page blocks parsing.
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const out = new URL('../out/', import.meta.url).pathname
let changed = 0
for (const entry of await readdir(out, { recursive: true })) {
  if (!entry.endsWith('.html')) continue
  const file = join(out, entry)
  const html = await readFile(file, 'utf8')
  const next = html.replace(/<script(?![^>]*\b(?:async|defer)\b)([^>]*\bsrc=[^>]*)>/g, '<script defer$1>')
  if (next !== html) {
    await writeFile(file, next)
    changed++
  }
}
console.log(`postbuild: deferred blocking scripts in ${changed} HTML file(s)`)
