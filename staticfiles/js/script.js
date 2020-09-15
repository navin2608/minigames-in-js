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