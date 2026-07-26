let sentence = "hello world"; //global
// code 1.
let reversed1 = sentence.split(' ').reverse().join(' ');
console.log(reversed1);

// code 2.
for(let i=0; i < sentence.length-1; i++){
    if(sentence[i] === ' '){
        let reversed2 = `${sentence.slice(i+1,sentence.length)} ${sentence.slice(0,i)}`;
        return console.log(reversed2);
    }
}   