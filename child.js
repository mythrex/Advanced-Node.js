process.on('message', msg => {
  console.log('Message from child: '+msg);
})

let c = 0;

setInterval(()=>{
  process.send({counter: c++})
}, 1000)
