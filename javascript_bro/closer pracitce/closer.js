



function createGame(){
    let score=0;
    
    function increaseScore(points){
        score+=points;
        console.log(`+${points} pts`);
    }
    
    function decreaseScore(points){
        score-=points;
        console.log(`-${points} pts`);
    }
    
    function getScore(){
        return score;
    }


    return{
        increaseScore:increaseScore,
        decreaseScore:decreaseScore,
        getScore:getScore,
    }

}

const game=new createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} pts`);



