//challenge 1 : age in days
function ageindays() {
    var bornyear = prompt("enter born year..");
    var ageindays = (2020 - bornyear) * 365;
    var ele = document.createElement('h1');
    var textanswer = document.createTextNode("you are " + ageindays + "days old");

    ele.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(ele);
    ele.setAttribute('id', 'ageindayss');
}
function reset() {
    document.getElementById('ageindayss').remove();
}

function catgenerator() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-box')
    image.src = " https://media.giphy.com/media/l3vRfj2Wbziwg7Yu4/giphy.gif";
    div.appendChild(image);


}

//Challenge : Rock,paper,scissors
function rpsGame(yourChoice) {
    //console.log(yourChoice)
    var humanchoice, botchoice;
    humanchoice = yourChoice.id
    botchoice = numberToChoice(randToRpsInt())
    console.log(botchoice)
    results = decideWinner(humanchoice, botchoice); //1,0
    console.log(results)
    message = finalmessage(results)  //{message:"you won",color:'green'}
    console.log(message)
    // rpsFrontEnd(yourChoice.id, botchoice, message)
}

function randToRpsInt() {                       //randToRpsInt() ---> Random number to rock paper scissor integer
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return (['rock', 'paper', 'scissors'][number])
}

function decideWinner(yourChoice, botchoice) {
    var rpsdatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }
    }
    var yourscore = rpsdatabase[yourChoice][botchoice]
    var computerscore = rpsdatabase[botchoice][botchoice]
    return [yourscore, computerscore]
}
function finalmessage([yourscore, botchoice]) {
    if (yourscore === 0) {
        return { 'message': 'you lost', 'color': 'red' };

    } else if (yourscore === 0.5) {
        return { 'message': 'you tie', 'color': 'yellow' };
    }
    else {
        return { 'message': 'you won', 'color': 'green' };
    }
}
