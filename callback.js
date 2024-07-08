// console.log("one")
// console.log("two")

// setTimeout(()=>{
// console.log("Hello")
// },2000)

// console.log("three")
// console.log("four")

// function sum(a,b){
// console.log(a+b)
// }
// function calculate(a,b,sumCallback){
//     sumCallback(a,b)
// }
// calculate(20,30,sum)

// const hello=()=>{
//     console.log("hello console")
// }
// setTimeout(hello,2000)

function getData(dataId){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
      resolve("successfully")
    },3000)
})
}
(async function getallData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();
// getallData();

// getData(1).then((res)=>{
// console.log(res)
// getData(2).then(()=>{
//     console.log(res)
// })
// })

// promise chain

// console.log("getting data1...")

// getData(1)
// .then((res)=>{
//     console.log("getting data2...")
//     return getData(2);
// })
// .then((res)=>{
//     console.log("getting data3...")
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res)
// })



// let promise = new Promise((resolve,reject)=>{
//  console.log("I am promise");
//  resolve("success");
// // reject("some occured error")
// })

// function getData1(dataId1,getNextdata1){
//     return new Promise((resolve1,reject1)=>{
//    setTimeout(()=>{
//     console.log("data",dataId1)
//     resolve1("Success")
//     if(getNextdata1){
//         getNextdata1()
//     }
//    },5000)
//     })
// }
// getData1(1)

// const getPromise =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("I am Promise")
//         // resolve("Success")
//         reject("networking error")
//     })

// }

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })

// promise.catch((err)=>{
//     console.log("rejected", err)
// })

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("getting data1...");
// asyncFunc1().then((res) => {
//   console.log("getting data2...");
//   let p2 = asyncFunc2().then((res) => {});
// });

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 4000);
//   });
// }


// function api(){
//     return new Promise((resolve,result)=>{
//     setTimeout(()=>{
//         console.log("Weather data..")
//         resolve(200)
//     },2000);
//     }) 
// }
// async function getWeatherData(){
//     await api();   
// }
// getWeatherData()