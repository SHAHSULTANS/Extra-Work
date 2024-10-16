



const minNUm=50;
const maxNUm=100;

const answer= Math.floor(Math.random()*(maxNUm-minNUm+1)+minNUm);

//console.log(answer);
let attemps=0;
let guess;
let running=true;

while(running)
{
    guess=window.prompt(`Guess the number between ${minNUm}- ${maxNUm}`);

    guess=Number(guess);

    if(isNaN(guess))
    {
        window.alert(`Please enter valid number`);
    }
    else if(guess<minNUm || guess>maxNUm)
    {
        window.alert("Please enter a valid number");
    }
    else
    {
        attemps++;
        if(guess<answer)
        {
            window.alert("Too Low! Try again");
        }
        else if(guess>answer)
        {
            window.alert("Too High! Try again");
        }
        else
        {
            window.alert(`Correct! The answer ${answer}. It took you ${attemps} attemps`);
            running=false;
        }
    }





}