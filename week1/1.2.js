// biggest number

let arr=[0,5,6,4,3,2,1,0,78,25,34,1,11];
let largestNum=arr[0];
for(let i =0;i<arr.length;i++){
    if(arr[i]>largestNum){
        largestNum=arr[i];
    }
}
console.log(largestNum);