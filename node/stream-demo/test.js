const RandomNumberStream = require('./readable');
const OutputStream = require('./writable');

const rns = new RandomNumberStream(10);
const os = new OutputStream({
    highWaterMark: 8
});
// 输入流事件
rns.on('data', chunk => {
    if (os.write(chunk) === false) {
        console.log('pause');
        rns.pause();
    }
})
// 输出流事件 
os.on('drain', () => {
    console.log('drain');
    rns.resume();
})
