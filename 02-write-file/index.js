const { stdin , stdout} = process;

stdout.write('Введи текст друг\n')
process.on('SIGINT', function() {
    console.log('Удачного дня\n');
    process.exit();

});

stdin.on('data', data => {
    //const dataStringified = data.toString();
 
    //const reverseName = name.split('').join('');
    const name = data.toString();
    const fs = require('fs');
    if(name.trim() !== "exit"){
        stdout.write('Введи текст друг\n')
        //stdout.write(reverseName)
        
        fs.appendFile('./02-write-file/text.txt', data, (err) => err && console.error(err));
    }else{
        //stdout.write("dsd")
        stdout.write('Удачного дня\n')
        process.exit();
    }
  }
  

  
);






/* let fs = require('fs')
fs.writeFile('file.text', 'sdasdasdasd', function(error){
    if(error) throw error;
    console.log("gii")
}) */



/* const fs = require('fs');
const readableStream = fs.ReadStream('./01-read-file/text.txt', 'utf-8');
readableStream.on('data', chunk => console.log(chunk));  */
//node inpOut

/* const fs = require('fs');

const input = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.on('data', chunk => output.write(chunk));
input.on('error', error => console.log('Error', error.message)); */