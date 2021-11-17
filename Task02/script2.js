
const green = document.getElementsByClassName('green')[0];
const yellow = document.getElementsByClassName('yellow')[0];
const red = document.getElementsByClassName('red')[0];

function next() {
    if (count == 1) {
        green.classList.add('green-green');
        yellow.classList.remove('yellow-yellow');
        red.classList.remove('red-red');
    } else if (count == 2) {
         yellow.classList.add('yellow-yellow');
    } else if (count == 3) {
        green.classList.remove('green-green');
        yellow.classList.remove('yellow-yellow');
        red.classList.add('red-red');
    } else if (count == 4) {
        yellow.classList.add('yellow-yellow');
        count = 0;
    }
    count++;
}

let count = 1;
