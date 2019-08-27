const Writable = require('stream').Writable;

module.exports = class OutputStream extends Writable {
    _write(chunk, enc, callback) {
        // 接收 chunk 数据, 写到 stdout 中
        process.stdout.write(chunk.toString().toUpperCase());
        setTimeout(callback, 1000);
    }
}




