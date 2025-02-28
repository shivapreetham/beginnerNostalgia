// let data="secret";

// class User{
// constructor(name,email){
// this.name=name;
// this.email=email;
// }    

// viewData(){
//     console.log("this is website data=",data);
// }
// }

// let student1=new User("shadha","fat@gamil.com")
// let student2= new User("mew","i@gmail.com")

// function getData(dataId,getNextData)
// {
    // setTimeout(()=>{
    //     console.log("data",dataId);
    //     if(getNextData){
    //         getNextData();
    //     }
    // },2000);

// }

// // callback hell
// getData(1,()=>{
//     console.log("getting data 2.....")
//     getData(2,()=>{
//         console.log("getting data 3....");
//         getData(3,()=>{
//             console.log("getting data 4......");
//             getData(4);
//         })})});

//promises

// let promise= new Promise((resolve,reject)=>{
//     console.log("I am a promise");
    
//     reject("rejected");
// });

// 


// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("1-kuch tho hi bhai result kARKE");
//             resolve("success");
//         },4000);
//     } );
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("2-kuch tho hi bhai result kARKE");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetchig data 1");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetchig data 2");
//     asyncFunc2().then((res)=>{
//     console.log(res);
// })

// })
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("data ",dataId);
//            resolve("success");
//         },4000);
//     });
// }
// (async function (){
//     await getData(1);
//     await getData(2);
//     await getData(3);

// })();
const factPara= document.querySelector("#facts");
const URL=" https://cat-fact.herokuapp.com/facts";
const btn= document.querySelector("#btn");
const getFacts= async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    
    factPara.innerText= data[0].text;
};
btn.addEventListener("click",getFacts);
getFacts();


//post request using api





