const iArr = [1,2,3];
const lArr = [4,5,6];
const mArr = iArr.concat(lArr);
console.log(mArr);

function print(str){
    console.log(str);
}
mArr.forEach(print);