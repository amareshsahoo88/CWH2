console.log('Amaresh');

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random nuber was supported")
    }
    else{
        setTimeout(()=>{
            console.log('Yes i am done');
            resolve("Amaresh")
        },3000);
    }
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})