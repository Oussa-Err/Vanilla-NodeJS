const events = require('events')

module.exports = class extends new events.EventEmitter {
    constructor() {
        super()
    }
}