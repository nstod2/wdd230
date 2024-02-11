const button = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
    navigation.classList.toggle('open');
    button.classList.toggle('open');
});

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

const daysDisplay = document.querySelector('#days');
const msToDays = 84600000;

let lastVisit = Number(localStorage.getItem('lastVisit-ms')) || 0;

if (lastVisit !== 0) {
    let todayVisit = Date.now();
    let days = (lastVisit - todayVisit) / msToDays;
    if (days < 1) {
        daysDisplay.textContent = 'Back so soon!  Awesome!'
    } else {
        daysDisplay.textContent = `You last visited ${days.toFixed(0)} days ago.`
    }
    localStorage.setItem('lastVisit-ms', todayVisit);
} else {
    let todayVisit = Date.now();
    daysDisplay.textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem('lastVisit-ms', todayVisit);
}

