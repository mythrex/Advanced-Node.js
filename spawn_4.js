const {spawn} = require('child_process');

// spawn using shell syntax and inheriting the stdout and stdin of main process

const find = spawn('find ~/Coding/mythrex.github.io',{
  shell: true,
  stdio: 'inherit'
});
