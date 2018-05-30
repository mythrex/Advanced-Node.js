//spawn is thhe spawn property in child_process object
const {spawn} = require('child_process');

const child = spawn('pwd')

// the exit event
child.on('exit',(code, sig)=>{
  console.log(`The program exited with code: ${code} and signal: ${sig}`);
})

//data event is always on stdout
child.stdout.on('data',data => {
  console.log('child stdout: '+data);
})
