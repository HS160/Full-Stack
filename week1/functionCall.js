 function Calculator(a,b,fn){
    let result = fn(a,b);
    return result;
}
function multi(a,b){
    return (a*b);
}
function add(a,b){
    return (a+b);
}
function sub(a,b){
    return (a-b);
}
function divide(a,b){
    return (a/b);
}
console.log("Multiply: ",Calculator(4,2,multi));
console.log("Addition: ",Calculator(4,2,add));
console.log("Divide  : ",Calculator(4,1,divide));
console.log("Subtract: ",Calculator(4,2,sub));