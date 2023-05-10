let fs = require('fs');
        fs.readdir('./06-build-page/styles', {withFileTypes: true}, (error, dirEntryList) =>{
            dirEntryList.forEach((elem) => {
                let name = elem.name
                fs.stat('./06-build-page/styles/' + name, (error, stats) =>{
                    if(!error){
                        const path = require('node:path');
                        const elements = new Array();        
                        let newName = path.parse(name)
                        elements.push(newName.name)
                        console.log(elements)
                    }
                })
            })
        })

/* let fileContent = fs.readFileSync('./06-build-page/template.html', 'utf8');

//console.log(fileContent.slice(0,"{{"));
console.log(fileContent.split("{{header}}")); */
//console.log(fileContent.indexOf("{{header}}")); */