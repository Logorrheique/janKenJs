

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
    stone.innerHTML = 'Le robot a fait Pierre';
}
function robotGetPaper(){
    let paper = document.getElementById('robotArea');
    paper.innerHTML = 'Le robot a fait Papier';
}
function robotGetScissors(){
    let scissors = document.getElementById('robotArea');
    scissors.innerHTML = 'Le robot a fait Ciseaux';
}

function win(){
    let win = document.getElementById('resultArea');
    win.innerHTML = `C'est WINNN GG`;
}
function lose(){
    let lose = document.getElementById('resultArea');
    lose.innerHTML = `C'est LOSEEEE`;
}
function egal(){
    let egal = document.getElementById('resultArea');
    egal.innerHTML = `égalité (la chance..)`;
}


