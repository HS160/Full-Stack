const fs = require("fs")

fs.readFile("a.txt","utf-8", function(err,data){
    console.log(data);
    data = data + "hey harsh how are you";
    fs.writeFile();
});