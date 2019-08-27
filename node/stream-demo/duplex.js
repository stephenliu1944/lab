const Duplex = require('stream').Duplex;
const symbolSource = Symbol('source');

module.exports = class MyDuplex extends Duplex {
    constructor(source, options) {
        super(options);
        this[sourceSymbol] = source;
    }

    _write(chunk, encoding, callback) {
        if (Buffer.isBuffer(chunk)) {
            chunk = chunk.toString();
        }

        this[sourceSymbol].write
    }
}