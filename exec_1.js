const {exec} = require('child_process');

//shell syntax will work perfectly fine
exec('find ~/Coding/mythrex.github.io | wc -l',(err, stdout, stderr)=>{
  if(err){
    console.error(err);
    return ;
  }
  console.log(`Stderr: ${stderr}`);
  console.log(`Stdout: ${stdout}`);
})
