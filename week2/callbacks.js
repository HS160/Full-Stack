function square(n){ 
    return n*n;
}

function cube(n){
    return n*n*n;
}

function Sum(a,b,cn){
    return cn(a)+cn(b);
}

let ans = Sum(4,5,square);
let ans1 = Sum(4,5,cube);
console.log("square = ",ans);
console.log("Cube = ",ans1);
