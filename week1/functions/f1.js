function Calculator(a,b,fn){
    let answer = fn(a,b);
    return answer;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
};

let answer1 = Calculator(2,4,mul);
console.log(answer1);