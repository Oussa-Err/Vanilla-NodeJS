const {writeFileSync, readFileSync} = require('fs')

console.log('starting')
const first = readFileSync('./content/text.txt', 'utf-8')
writeFileSync('./content/result.txt', `here is the result ${first}`, {flag: 'a'})

console.log('done')
