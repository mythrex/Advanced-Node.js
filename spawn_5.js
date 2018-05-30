const {spawn} = require('child_process');

// spawn using shell syntax and inheriting the stdout and stdin of main process

const find = spawn('node',['timer.js'],{
  stdio: 'ignore',
  detached: true
});

find.unref();
