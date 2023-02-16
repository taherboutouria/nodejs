const fs = require('fs')


console.log('Before Reading');

fs.readFile('./doc.txt','utf-8' ,(err,data)=>{
  
    fs.appendFile('./doc2.txt', data,(err,data)=>{
        console.log('updated succ');
    })
})
console.log('after reading');
