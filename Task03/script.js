
const pDisk = document.getElementsByClassName('p-disk');
const divDisk = document.getElementById('div-disk');

divDisk.addEventListener('mouseenter', event => {
    if (event.target.tagName === "P") {
        event.target.style.color = 'blue'
    }
}, true);

divDisk.addEventListener('mouseleave', event => {
    if (event.target.tagName == "P") {
        event.target.style.color = 'black'
    }
}, true);

divDisk.addEventListener('click', event => {

    const p1 = document.getElementsByTagName('P')[0];
    const p2 = document.getElementsByTagName('P')[4];
    const p3 = document.getElementsByTagName('P')[8];

    const li1 = document.getElementsByClassName('package')[0];
    const li2 = document.getElementsByClassName('package')[1];
    const li3 = document.getElementsByClassName('package')[2];

    if (event.target === p1) {
        if (li1.style.visibility == 'visible') {
            li1.style.visibility = 'hidden';
            li1.style.marginTop = '-120px';
        } else {
            li1.style.visibility = 'visible';
            li1.style.marginTop = '0px';
        }
    } else if (event.target === p2) {
        if (li2.style.visibility == 'visible') {
            li2.style.visibility = 'hidden';
            li2.style.marginTop = '-120px';
        } else {
            li2.style.visibility = 'visible';
            li2.style.marginTop = '0px';
        }
    } else if (event.target === p3) {
        if (li3.style.visibility == 'visible') {
            li3.style.visibility = 'hidden';
            li3.style.marginTop = '-120px';
        } else {
            li3.style.visibility = 'visible';
            li3.style.marginTop = '0px';
        }
    }
}, true);
