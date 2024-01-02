const {readFileSync,writeFileSync}=require('fs')
console.log('Task is started .....')
//Read Files
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

//console.log(first,second)

//write or create files
writeFileSync('./content/first-second.txt',`Here is the Result: ${first},${second}`,{flag:'a'})

//read file
const first_second=readFileSync('./content/first-second.txt','utf8')
console.log(first_second)


console.log('********************')
console.log('Task is completed')
console.log('********************')