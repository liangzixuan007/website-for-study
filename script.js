// 选择具有 'refresh' 类名的 h1 元素
const refreshHeader = document.querySelector('.refresh');



function handleClick(event) {
    alert('Refresh button clicked!');

    var diceNumber1 = Math.floor(Math.random()*6) + 1;

    var imgRandomizer = "dice" + diceNumber1 + ".png";

    var final = "./images/" + imgRandomizer;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", final);

    var diceNumber2 = Math.floor(Math.random()*6) + 1;

    var imgRandomizerPlus = "dice" + diceNumber2 + ".png";

    var finalPlus = "./images/" + imgRandomizerPlus;

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", finalPlus);

}


refreshHeader.addEventListener('click', handleClick);