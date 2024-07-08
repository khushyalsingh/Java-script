console.log("Welcome to Khushyal");
console.log('Apna college');

// let num = prompt("Enter a number");
// if(num%5===0){
//     console.log(num,"multiple of 5");
// }
// else{
//     console.log(num,"Cannot of multipe of 5");
// }


// for(let i = 1; i<=10;i++){
//     console.log("KHUSHYAL",i)
// }

// let gameNum=25;
// let userNum=prompt("Guess the game number :");
// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong number. Guess again")
// }
// console.log("congratulation, you entered the right number")

// let str = "KHUSHYAL"
// console.log(str.length)
// console.log(str[0])
// console.log(str[7])

// // Template litreals
// let specialstring=`This is a template litreal ${5+10+5}`
// console.log(specialstring)

// let fullName=prompt("Enter your fullname withoutspaces")
// UserName= "@"+fullName+fullName.length
// console.log(UserName)

// let marks=[97,75,85,45,89];
// console.log(marks);
// console.log(marks.length);

// let heroes=["iroanman","captian america","thor","hulk","spiderman","drstrange"]
// console.log(heroes)

// for loop

// for(let  i=0; i<=heroes.length; i++){
//     console.log(heroes[i])
// }

// for of loop

// for(let hero of heroes){
//     console.log(hero)
// }
// for in loop

// for (let key in heroes) {
//   console.log(heroes[key])
// }


// let marks=[85,97,44,37,76,60]
// let sum = 0;
// for (let val of marks) {
//     sum+=val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items =[250, 645, 300, 900, 50]
// let i = 0
// for (let val of items) {
//     let offer = val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for(let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items)

// let foodItems=["pizza","burger","potato","apple"]
// console.log(foodItems);
// let deleteditem= foodItems.pop();
//  foodItems.push("chips","biscuit","fan","sandwich","momos","frenchfry")
// console.log(foodItems)
// console.log(deleteditem)

// let foodItems=["pizza","burger","potato","apple"]
// console.log(foodItems.toString());
// console.log(foodItems);

// let items =[250, 645, 300, 900, 50]
// console.log(items.toString())
// console.log(items)

// let marvel_hero=["ironman","thor","spiderman"]
// let dc_hero=["supernan","batman"]
// let heroes = marvel_hero.concat(dc_hero)
// console.log(heroes)


// let marvel_hero=["ironman","thor","spiderman"]
// let val = marvel_hero.shift()
// console.log(`deleted ${val}`)


// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// console.log(companies.shift());
// console.log(companies)

// console.log(companies.splice(2,1,"OLA"))
// console.log(companies)

// console.log(companies.push("Amazon"))
// console.log(companies)

// function myfunction(){
//     console.log("Hello Khushyal")
// }
// myfunction()

// function myfunction(msg){
//     console.log(msg)
   
// }
// myfunction("Hello JavaScript")

// function myfunction( a , b){
//     sum =a+b;
//     console.log(sum)
// }
// myfunction(10,20)


// function myfunction( a , b){
//     sum =a+b;
//   return sum;
// }
// let val=myfunction(10,20)
// console.log(val)

// const arrowsum=(a,b)=>{
// console.log(a+b);
// }
// arrowsum(90,10)

// const multipe=(x,y)=>{
//     console.log(x*y)
// } 
// multipe(10,10)

// function countvowel(str){
//     let count = 0
//     for(let char of str){
//         if(char === "a"|| 
//             char ==="e"||
//             char === "i"|| 
//             char ==="o" ||
//              char ==="u" 
//             ){
//             count++
//         }
//     } 
//     console.log(count)
//     return count;
// }
// countvowel("apnacollege")

// let countvow=(str)=>{
//     let count = 0
//     for(let char of str){
//         if(char === "a"|| 
//             char ==="e"||
//             char === "i"|| 
//             char ==="o" ||
//              char ==="u" 
//             ){
//             count++
//         }
//     } 
//     console.log(count)
//     return count;
// }
// countvow("apnacollege")

// let arr =[10,20,30,40,50]
//function useto for-each loop

// arr.forEach(function printvalue(val){
//   console.log(val)  
// });

// arr function use to for-eachloop
// arr.forEach((val) => {
//     console.log(val)
// });

// let num =[10,20,30,40,50]
// num.forEach((num)=>{
//  console.log(num*num)
// })

// let calsquare=((num)=>{
// console.log(num*num);
// })
// num.forEach(calsquare)


// num.map((val)=>{
//     console.log(val);
// })

// let arr=num.map((val)=>{
//     return val*val
// })
// console.log(arr)

// let arr =[1,2,3,4,5,6,7,8,9,10];
// let even_num = arr.filter((val)=>{
//     return val %2===0;
// });
// console.log(even_num)

// let arr =[1,2,3,4,5]
//  const output=arr.reduce((previous,current)=>{
//     return previous+current;
//  });
//  console.log(output)

//  let arr =[1,2,3,4,5,6,7,8,9,10];
//  const result=arr.reduce((previous,current)=>{
//     return previous > current ? previous:current
//  })

//  console.log(result)

// let marks=[78,98,65,54,63,52,99]
// let result = marks.filter((val)=>{
//     return val > 95;
// })
// console.log(result)

// let n = prompt("Enter a number")
let arr = [];
for(let i = 1; i<=n; i++){
arr[i-1]=i;
}
console.log(arr)

let sum= arr.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(sum)

let factorial= arr.reduce((pre,cur)=>{
    return pre*cur;
})
console.log(factorial)