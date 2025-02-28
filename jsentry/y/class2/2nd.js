// a=99;
// a=a+1;
// console.log("the value of a is ",a);
// let mode="dark";
// let color;
// if(mode=="dark")
// {
//     color="black";
// }
// else
// {
//     color="aliceblue";
// }
// console.log(color);


// for(i=1;i<10;i++){
// console.log("lick you this number of times",i);
// }

// str="lovely";
// for(let i of str)
// console.log(i);



// student={
//     nae:"baby",
//     age:0,
//     cg:8.4
    
// }
// for(let i in student){
// console.log(student[i]);
// }

// let object={
//     item:"pen",
//     price:110,
// };
// console.log("the cost of",object.item, "is",object.price,"rupaiye");
// console.log(`the cost of ${object.item} is ${object.price} rupees`);



// function factorial(n){
   
//     if(n==1)
//     {
//         return 1;
//     }
//     else{
    
//     return n*factorial(n-1);
//     }
// }
// console.log(factorial(4));


// archinoid=(a,b)=>
// {
//     console.log(a+b);
// }

// archinoid(2,4);


let arr=["pune", "bengaluru", "phewphew"];
arr.forEach((val,idx,arr)=>{
   console.log(val.toUpperCase(),idx,arr);
});

let arr3=[1,2,3,4];
 num=arr3.map((val)=>{
    return val*2;
})
console.log(num);



output=arr3.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);

newarr= arr3.filter((val)=>{
    return (val%2==0);
})
console.log(newarr);

