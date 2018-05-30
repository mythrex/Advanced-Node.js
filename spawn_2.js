const {spawn} = require('child_process');

const child = spawn('wc')

//pipe the output of process as input of child input stream
process.stdin.pipe(child.stdin)

child.stdout.on('data',data => {
  console.log(`The child process output is: ${data}`);
})
