console.log("Welcome to Khushyal");
/*let newBtn= document.createElement("button");
newBtn.innerText="Click Me !!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
console.log(newBtn);
document.querySelector("body").append(newBtn);


let para = document.querySelector("p")
// console.log(para.setAttribute("class","newclass"))
para.classList.add("newclass")
para.classList.remove("newclass")*/

// let btn = document.querySelector("#btn1");
// btn.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY);

//   let a = 99;
//   a++;
//   console.log(a);
// };

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () => {
//   console.log("clicked me");
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you inside a div");
// };


// let over = document.querySelector("div");
// over.addEventListener("mouseover", () => {
//   console.log("mouseover!!!");
// });


// let btn = document.querySelector("#btn1");
// btn.addEventListener("click", () => {
//   console.log("button1 was clicked 1");
// });

// btn.addEventListener("click", () => {
//     console.log("button1 was clicked 2");
//   });

  

//   btn.addEventListener("click", () => {
//     console.log("button1 was clicked 4");
//   });



// const handler = ()=>{
// btn.addEventListener("click", () => {
// console.log("button1 was clicked 3");
// });
// };
// btn.removeEventListener("click",handler)


let modebtn = document.querySelector("#mode");
let currmode= "light";
let body= document.querySelector("body")
modebtn.addEventListener("click",()=>{
if(currmode=="light"){
    currmode="dark"; 
    body.classList.add("dark")
    body.classList.remove("light")
    // document.querySelector("body").style.backgroundColor="black";

}else{
    currmode="light";
   body.classList.add("light")
   body.classList.remove("dark")
    // document.querySelector("body").style.backgroundColor="white";
}
console.log(currmode);
});