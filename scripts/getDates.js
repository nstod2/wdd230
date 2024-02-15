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

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#wicon');
const captionDesc = document.querySelector('#desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.84&lon=-104.82&appid=fc750def0ad8258e60aec92a95a39b23&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`;
}

apiFetch();