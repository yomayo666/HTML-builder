const { stdin , stdout} = process;
const fs = require('fs');
fs.unlink('./05-merge-styles/project-dist/bundle.css', err => {
    if(!err){
        fs.readdir('./05-merge-styles/styles', {withFileTypes: true}, (error, dirEntryList) =>{
            dirEntryList.forEach((elem) => {
                let name = elem.name
                fs.stat('./05-merge-styles/styles/' + name, (error, stats) =>{
                    if(!error){
                        const path = require('node:path');
                        let ifCss = path.extname(name)
                        if(ifCss === ".css"){
                            fs.readFile('./05-merge-styles/styles/' + elem.name, 'utf-8', (err, data) =>{
                            if(!err){
                                fs.appendFile('./05-merge-styles/project-dist/bundle.css', data, (err) => err && console.error(err));
                            }else(
                                console.log(err)
                                )
        
                            }); 
                            //fs.appendFile('./05-merge-styles/project-dist/bundle.css', data, (err) => err && console.error(err));
                        }
                    }
                })
                
            })
        })

    }
 });



/* fs.readFile('./05-merge-styles/styles/' + elem.name, 'utf-8', (err, data) =>{
    if(!err){
        console.log(data)
    }else(
        console.log(err)
    )

}); */