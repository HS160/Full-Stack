function onDone(){
    console.log("hey there ");
}

setTimeout(onDone,1000);
setInterval(onDone,2000);

console.log("after set-timeout");