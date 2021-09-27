

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
        if(robotHand == -1){robotGetScissors();lose();}
        else if (robotHand == 1){robotGetPaper();win();}
        else {robotGetStone();egal();}
    }
    else if(playerHand == 'paper'){
        if(robotHand == -1)robotGetPaper();
        else if (robotHand == 1)robotGetScissors();
        else robotGetPaper();
    }
    else{
        if(robotHand == -1)robotGetPaper();
        else if (robotHand == 1)robotGetPaper();
        else robotGetScissors();
    }
}

function robotGetStone(){
    let stone = document.getElementById('robotArea');
    stone.innerHTML = 'Le robot avait fait Pierre';
}
function robotGetPaper(){
    let paper = document.getElementById('robotArea');
    paper.innerHTML = 'Le robot avait fait Papier';
}
function robotGetScissors(){
    let scissors = document.getElementById('robotArea');
    scissors.innerHTML = 'Le robot avait fait Ciseaux';
}

function win(){alert('C WIN')}
function lose(){alert('C LOSE')}
function egal(){alert('EGALITE')}


