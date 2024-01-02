const {readFile,writeFile}=require('fs')

//Read Files
console.log('Task is Started .....')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)

    const first=result

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            result
        }
        console.log(result)
    })
    const second =result 
    //write in file
    writeFile('./content/files-async.txt',`Here is the Result: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('******This task is completed******')
    })
})
//this is not work due to async method
console.log('Ready to start new Task')