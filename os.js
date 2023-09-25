const os = require('os')



const user = os.type()
console.log(user)

const currentOS = {
    userName: os.userInfo().username,
    osName: user,
    totalmem: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS)
