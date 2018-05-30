const {spawn} = require('child_process');

/*const child = spawn('find ~/Coding/mythrex.github.io')
wiil not work because ~/ is a shell syntax and shell syntax does not
work on spawn also uses seccond argument as arg to commands */

const find = spawn('find',['/home/mythrex/Coding/mythrex.github.io'])
const wc = spawn('wc',['-l'])

find.stdout.pipe(wc.stdin)

wc.on('exit',function (code, sig) {
  console.log(code,sig);
})

wc.stdout.on('data',data=>{
  console.log('No of files are: '+data);
})

wc.stderr.on('data',data=>{
  console.log(''+data);
})
