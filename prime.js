var a=10
if(a<=1){
    console.log("Not a prime")
}
else{
    for(let i=2; i<=Math.sqrt(a);i++){
        if(a%i===0){
            console.log("Not prime")
        }
        else{
            console.log("Prime number")
        }
    }
} 