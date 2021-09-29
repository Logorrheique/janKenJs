

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
        if(robotHand == -1)result('ciseaux','loose');
        else if (robotHand == 1)result('papier','win');
        else result('pierre','égalité');
    }
    else if(playerHand == 'paper'){
        if(robotHand == -1)result('pierre','loose');
        else if (robotHand == 1)result('ciseaux','win');
        else result('papier','égalité');
    }
    else{
        if(robotHand == -1)result('papier','loose');
        else if (robotHand == 1)result('pierre','win');
        else result('ciseaux','égalité');
    }
}
function result(robotResult,gameResult){
    let result = document.getElementById('resultArea');
    let robotHand = document.getElementById('robotArea');
    result.innerHTML =  gameResult;
    robotHand.innerHTML = 'Le robot a fait '+ robotResult;
}


