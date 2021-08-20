//// block-scope
function greetPersonLession4(name: any){
    let greet;
    if(name === 'Chandler'){
         greet = 'Hello Chandler';
    }else{
         greet = 'Hi there';
    }
    console.log(greet);

    //// not support hoisting
    // let greet; // will error
}
greetPersonLession4("Chandler");

//// cannot re-assign
var a = 1;
let b = 10;
if(a === 1){
    let b = 20;
    var a = 50;
}
//// result will be display a = 50, not display b = 20, display b =10 (value first)
console.log(a);
console.log(b);