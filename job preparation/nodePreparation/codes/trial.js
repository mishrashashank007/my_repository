const promise = new Promise((resolve, reject) =>{
    let sucess = false;
    if(sucess){
        resolve("Data Saved Server");
    }
    else{
        reject("fail");
    }
});

promise.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error);
});