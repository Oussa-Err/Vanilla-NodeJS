
const { readFile, writeFile } = require('fs')

console.log('starting')
readFile('/content/text.txt', 'utf8', (res, error) => {
    if (error) return
    else
    console.log(res)
})


console.log('done')


