
function getRandom(min, max)
{ // Традиционно в JS открывающие фигурные скобки располагаются на одной строке с кодом, который управляет блоком с этими фигурными скобками

    return Math.floor(Math.random() * (max - min) + min);
    // У вас есть фиксированные границы генерирования случайного числа, их можно прописать прям в этой функции, не передавая их каждый раз при вызове данной функции. Это решение снизило бы кол-во действий интерпретатора.
}

function generateRandom() {
    const randomNum = document.getElementsByTagName('h1')[0].childNodes[0];
    // Гораздо проще найти элемент по установленному у него id и работать именно с ним. Вы находите текстовый узел в элементе h1.

    randomNum.replaceWith(getRandom(1, 101));
    // Вы меняете текстовый узел в элементе h1 на новый текст. Гораздо правильнее и яснее изменять текстовое содержимое элемента h1 через запись нового значения в свойства textContent или innerText. 
}
