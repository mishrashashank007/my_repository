const fs = require('fs');

// write file
// read file
// update file
// delete file
// rename filen
// append file
// copy file
// create directory
// read directory
// update directory
// delete directory
// rename directory
//..........
 // and lots more


fs.writeFile("abcd.txt", "Hello World!", function (err){
   if(err) console.log(err);
   else console.log("File created");
})


// fs.readFile("abcd.txt", "utf8", function(err, data) {
//     if(err) console.log(err);
//     else console.log(data);
// })


// fs.appendFile("abcd.txt", " This is appended text.", function(err) {
//     if(err) console.log(err);
//     else console.log("File appended"); 
// }) 


// fs.unlink("abcd.txt", function(err) {
//    if (err) console.log(err);
//    else console.log("File deleted");
// })


// fs.mkdir("lolo", function(err) {
//    if (err) console.log(err);
//    else console.log("folder created");
// })


// fs.rm("lolo", {recursive: true}, function(err) {
//    if (err) console.log(err);
//    else console.log("folder deleted");
// })