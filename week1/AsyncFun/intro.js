function Sum(n){
    let summ=0;
    for(let i=0;i<n;i++){
        summ+=i;
    }
    return summ;
}

function sumTill100(){
    let ans =Sum(100);

    console.log(ans);
}

setTimeout(sumTill100,1000)
console.log("hello world");