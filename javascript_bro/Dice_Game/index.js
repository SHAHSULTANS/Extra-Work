

function rolldice(){

    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];
    // console.log("hello");

    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        // console.log(value);
        values.push(value);
        images.push(`<img src="dices_images/Dice-${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent=`Dice: ${values.join(", ")}`;
    diceImages.innerHTML=images.join(` `);
    // console.log(values);
}