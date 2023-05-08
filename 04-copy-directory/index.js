const { stdin , stdout} = process;
const fs = require('fs');
const copyDir = fs.promises;
/* fs.rmdir('./04-copy-directory/files-copy',{withFileTypes: true}, err => {
    if(err) throw err; // не удалось удалить папку
    //console.log('Папка успешно удалена');
 }); */
 fs.readdir('./04-copy-directory/files-copy', (error, dirEntryList) => {
    if(!error){
        dirEntryList.forEach((file) =>{
            console.log(file)
            fs.unlink('./04-copy-directory/files-copy/' + file, err => {
                if(err) throw err; // не удалось удалить файл
                console.log('Файл успешно удалён');
             });
        })
    }
});

copyDir.mkdir('./04-copy-directory/files-copy', {recursive: true})
fs.readdir('./04-copy-directory/files', {withFileTypes: true}, (error, dirEntryList) =>{
    dirEntryList.forEach((file) =>{
        console.log(file.name)
        //console.log(file.name)
        fs.copyFile('./04-copy-directory/files/' + file.name,'./04-copy-directory/files-copy/' + file.name, err => {
            if(!err){
                console.log("Копированние прошло успешно!")
            }
        } )
    })
})