

function randomNegativePositive(){
    let temp = Math.floor(Math.random()*3)+1;
    if(temp == 3)
        return 1;
    else if(temp == 2)
        return 0;    
    else return -1;
}
function janKen(playerHand){//playerHand = stone OR paper OR scissors
    const robotHand = randomNegativePositive();

    console.log(robotHand);
    //STONE HAND
    if(playerHand == 'stone'){
        if(robotHand == -1)result('scissors','loose');
        else if (robotHand == 1)result('paper','win');
        else result('stone','égalité');
    }
    else if(playerHand == 'paper'){
        if(robotHand == -1)result('stone','loose');
        else if (robotHand == 1)result('scissors','win');
        else result('paper','égalité');
    }
    else{
        if(robotHand == -1)result('paper','loose');
        else if (robotHand == 1)result('stone','win');
        else result('scissors','égalité');
    }
}
function result(robotResult,gameResult){
    let result = document.getElementById('resultArea');
    let robotHand = document.getElementById('robotArea');
    result.innerHTML =  gameResult;
    robotHand.innerHTML = 'Le robot a fait '+ robotResult;
}


