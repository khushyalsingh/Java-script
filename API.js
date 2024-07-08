const URL="https://cat-fact.herokuapp.com/facts";
const factpara= document.querySelector("#fact")
const btn=document.querySelector("#btn")

const getFacts =async()=>{
    console.log("getting data...")
    let response = await fetch(URL);
    console.log(response);
    let data = await  response.json();
    // console.log(data[0].text)
    // console.log(data[1].text)
    factpara.innerText = data[0].text;
}
// console.log(getFacts())
btn.addEventListener("click",getFacts)