const {readFile}=require('fs');

console.log("Started a First Task");

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("First Task")
})

console.log("Starting Next Task")