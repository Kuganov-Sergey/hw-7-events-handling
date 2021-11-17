
function getRandom(min, max)
{   
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandom() {
    const randomNum = document.getElementsByTagName('h1')[0].childNodes[0];
    randomNum.replaceWith(getRandom(1, 101));
}
