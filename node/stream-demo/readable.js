const Readable = require('stream').Readable;

module.exports = class RandomNumberStream extends Readable {
    constructor(max) {
        super();
        this.max = max;
    }
    // 填充可读缓冲区的方法
    _read(size) {
        if (this.max) {
            this.max -= 1;
            setTimeout(() => {
                const randomNumber = parseInt(Math.random() * 100000);
                this.push(`${randomNumber}\n`);     // 写入到缓冲区, 等待用户调用read()方法消费掉
            }, 100);
        } else {
            this.push(null);                        // 停止写入到缓冲区
        }
    }
}

