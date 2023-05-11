fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>addDropDown(res))
.catch("404 not found");

let select=document.querySelectorAll("select")
let button=document.querySelector("#btn")
let input=document.getElementById("input")
let output=document.getElementById("result")

function addDropDown(res){
    let currencyArray=Object.entries(res);
    currencyArray.forEach(element=>{
        select[0].innerHTML+=`<option value="${element[0]}">${element[0]}</option>`
        select[1].innerHTML+=`<option value="${element[0]}">${element[0]}</option>`
    })
}
button.addEventListener("click",()=>{
    let inputCurrency=select[0].value
    let outputCurrency=select[1].value
    let inputVal=input.value
    convert(inputCurrency,outputCurrency,inputVal);
})

function convert(inputCurrency,outputCurrency,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${inputCurrency}&to=${outputCurrency}`)
    .then(resp => resp.json())
    .then((data) => {
        output.value=Object.values(data.rates)[0];
  });

}







