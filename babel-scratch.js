import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
console.log(`Babel setup: ${pkg.dependencies ? 'YES' : 'NO'}`)
