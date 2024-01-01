console.log("Amaresh is a hacker")
console.log("Rohan is a hecker")

setTimeout(()=> {
    console.log("I am inside setTimeout function")
}, 2000);

console.log("the end")

const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src , callback)=> {
   let sc =  document.createElement("script");
   sc.src = src;
   sc.onload = callback("harry");

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)