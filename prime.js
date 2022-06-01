let num=23;
let prime;
for(i=2;i<num;i++){
    if(num%i==0)
    {
        prime=1;
        break;
    }
    else{
        prime=0;
    }
}
if(prime==0){
    console.log("prime");
}
else{
    console.log(" not prime");
}