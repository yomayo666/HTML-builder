const { error } = require('console');
const fs = require('fs')
fs.readdir('./03-files-in-folder/secret-folder', {withFileTypes: true}, (error, dirEntryList) =>{
    if(!error){
        dirEntryList.forEach((dirEntry) =>{
            var fs = require("fs"); // Load the filesystem module
            if(dirEntry.isFile()){
                var name = dirEntry.name.toString()
                //console.log(name)
            }
            fs.stat('./03-files-in-folder/secret-folder/' + name, (error, stats) =>{
                if(!error){
                    //console.log(stats.size)
                    const path = require('node:path');
                    //let x = dirEntry.name.toString()
                    let n = path.extname(name)
                    //console.log(n)
                    let newName = path.parse(name)
                    console.log(`${newName.name} - ${n} - ${stats.size}`);
                    //console.log(dirEntry)
                   

                   /*  var fileSizeInBytes = stats.size;
                    console.log(fileSizeInBytes) */
                }
            })
            
// Convert the file size to megabytes (optional)
            //var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
           /*  if(dirEntry.isFile()){
                
            } */
            
        })
    }else{
        console.error(error);
    }
})



/* const readableStream = fs.ReadStream('./01-read-file/secret-folder', direct, );
readableStream.on('data', chunk => console.log(chunk)); 
 */