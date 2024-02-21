const temptoday = document.querySelector('#temptoday');
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const temp3 = document.querySelector('#temp3');
const todaydesc = document.querySelector('#todaydesc');
const desc1 = document.querySelector('#desc1');
const desc2 = document.querySelector('#desc2');
const desc3 = document.querySelector('#desc3');
const todayicon = document.querySelector('#todayicon');
const icon1 = document.querySelector('#icon1');
const icon2 = document.querySelector('#icon2');
const icon3 = document.querySelector('#icon3');

const wurl = 'https://api.openweathermap.org/data/3.0/onecall?lat=38.84&lon=-104.82&appid=fc750def0ad8258e60aec92a95a39b23&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(wurl);
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
    temptoday.innerHTML = `${data.daily[0].temp.day}&deg;F`;
    temp1.innerHTML = `${data.daily[1].temp.day}&deg;F `;
    temp2.innerHTML = `${data.daily[2].temp.day}&deg;F `;
    temp3.innerHTML = `${data.daily[3].temp.day}&deg;F `;
    const icon0src = `https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}.png`;
    const icon1src = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`;
    const icon2src = `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`;
    const icon3src = `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`;
    todayicon.setAttribute('src', icon0src);
    icon1.setAttribute('src', icon1src);
    icon2.setAttribute('src', icon2src);
    icon3.setAttribute('src', icon3src);
    todayicon.setAttribute('alt', `${data.daily[0].weather[0].description}`);
    icon1.setAttribute('alt', `${data.daily[1].weather[0].description}`);
    icon2.setAttribute('alt', `${data.daily[2].weather[0].description}`);
    icon3.setAttribute('alt', `${data.daily[3].weather[0].description}`);
    todaydesc.innerHTML = `${data.daily[0].weather[0].main} - `;
    desc1.innerHTML = `- ${data.daily[1].weather[0].main} - `;
    desc2.innerHTML = `- ${data.daily[2].weather[0].main} - `;
    desc3.innerHTML = `- ${data.daily[3].weather[0].main} - `;
}

apiFetch();

const thisday = new Date();
const weekday = thisday.getDay;

const hero = document.querySelector('.hero');

if (weekday === 1 || weekday === 2 || weekday === 3) {
    let banner = document.createElement('h2');
    banner.innerHTML = 'Come all and join us on Wednesday at 7 pm for a meet and greet!';
    hero.appendChild(banner);
    let close = document.createElement('button');
    close.innerHTML = '❌';
    hero.appendChild(close);
}