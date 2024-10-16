
const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;
// console.log(typeof(textBox.value));



function convert(){
    temp=textBox.value;
    temp=Number(temp)
    if(toFahrenheit.checked)
    {
        // result.textContent="You Selected To Fahrenheit"
        temp=(1.8*temp)+32;
        result.textContent=temp.toFixed(1)+" °F";
    }
    else if(toCelsius.checked)
    {
        // result.textContent="You Selected To Celcius"
        temp=((temp-32)/9)*5;
        result.textContent=temp.toFixed(1)+" °C";
    }
    else
    {
        result.textContent="Select a unit"
    }
}