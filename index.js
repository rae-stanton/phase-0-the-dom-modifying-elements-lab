const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Luna is the champion';

document.body.appendChild(newHeader);


window.newHeader = newHeader;
