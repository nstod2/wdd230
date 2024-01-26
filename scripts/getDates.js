const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
let dateTime = month + '/' + day + '/' + year + ' ' + hour + ':' + min + ':' + sec;
document.querySelector('#lastModified').textContent = `Last Modification: ${dateTime}`;
document.querySelector('#copyright').innerHTML = `&copy ${year}`;

const button = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
    navigation.classList.toggle('open');
    button.classList.toggle('open');
});

const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');
const heading = document.querySelector('h1');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes("☾")) {
        main.style.background = "#000";
        heading.style.color = "#fff";
        modeButton.textContent = "☼";
    } else {
        main.style.background = "#fff";
        heading.style.color = "#000";
        modeButton.textContent = "☾";
    }
});

const visitDisplay = document.querySelector('.visits');

let numVisits = Number(localStorage.getItem('numVisits-ns')) || 0;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = '1st visit';
}

numVisits++;

localStorage.setItem('numVisits-ns', numVisits);