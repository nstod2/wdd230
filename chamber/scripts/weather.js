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
const weekday = thisday.getDay();

const hero = document.querySelector('.hero');

if (weekday === 1 || weekday === 2 || weekday === 3) {
    let banner = document.createElement('h2');
    banner.innerHTML = 'Join us on Wednesday at 7 pm for a meet and greet! All are welcome!';
    banner.classList
    hero.appendChild(banner);
    let close = document.createElement('button');
    close.classList.add('banbtn');
    close.innerHTML = '🅇';
    hero.appendChild(close);

    close.addEventListener('click', () => {
        hero.removeChild(banner);
        hero.removeChild(close);
    })
}

const url = "https://nstod2.github.io/wdd230/chamber/data/members.json";
const indexes = [];
const business1 = document.querySelector('.business1');
const business2 = document.querySelector('.business2');
const business3 = document.querySelector('.business3');

async function getRandomMember(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayRandomMembers(data.members);
}

const displayRandomMembers = (members) => {
    const indexes = [];
    let index = 0;
    members.forEach((member) => {
        if (member.membership === 'Silver' || member.membership === 'Gold') {
            indexes.push(index);
        }
        index++;
    });
    let randomNum1 = Math.floor(Math.random() * (indexes.length - 1));
    let randomIndex1 = indexes[randomNum1];
    indexes.splice(randomNum1, 1);
    let randomNum2 = Math.floor(Math.random() * (indexes.length - 1));
    let randomIndex2 = indexes[randomNum2];
    indexes.splice(randomNum2, 1);
    let randomNum3 = Math.floor(Math.random() * (indexes.length - 1));
    let randomIndex3 = indexes[randomNum3];
    indexes.splice(randomNum3, 1);

    let slogan1 = document.createElement('h3');
    let address1 = document.createElement('p');
    let phone1 = document.createElement('p');
    let url1 = document.createElement('a');
    let logo1 = document.createElement('img');

    slogan1.textContent = `${members[randomIndex1].slogan}`;
    address1.textContent = `${members[randomIndex1].street} Colorado Springs, CO ${members[randomIndex1].zipcode}`;
    phone1.textContent = `${members[randomIndex1].phone}`;
    url1.href = `${members[randomIndex1].website}`;
    url1.innerHTML = `${members[randomIndex1].website}`;
    logo1.src = `https://nstod2.github.io/wdd230/chamber/images/${members[randomIndex1].imagename}`;
    logo1.alt = `${members[randomIndex1].name}`;

    business1.appendChild(logo1);
    business1.appendChild(slogan1);
    business1.appendChild(address1);
    business1.appendChild(phone1);
    business1.appendChild(url1);

    let slogan2 = document.createElement('h3');
    let address2 = document.createElement('p');
    let phone2 = document.createElement('p');
    let url2 = document.createElement('a');
    let logo2 = document.createElement('img');

    slogan2.textContent = `${members[randomIndex2].slogan}`;
    address2.textContent = `${members[randomIndex2].street} Colorado Springs, CO ${members[randomIndex2].zipcode}`;
    phone2.textContent = `${members[randomIndex2].phone}`;
    url2.href = `${members[randomIndex2].website}`;
    url2.innerHTML = `${members[randomIndex2].website}`;
    logo2.src = `https://nstod2.github.io/wdd230/chamber/images/${members[randomIndex2].imagename}`;
    logo2.alt = `${members[randomIndex2].name}`;

    business2.appendChild(logo2);
    business2.appendChild(slogan2);
    business2.appendChild(address2);
    business2.appendChild(phone2);
    business2.appendChild(url2);

    let slogan3 = document.createElement('h3');
    let address3 = document.createElement('p');
    let phone3 = document.createElement('p');
    let url3 = document.createElement('a');
    let logo3 = document.createElement('img');

    slogan3.textContent = `${members[randomIndex3].slogan}`;
    address3.textContent = `${members[randomIndex3].street} Colorado Springs, CO ${members[randomIndex3].zipcode}`;
    phone3.textContent = `${members[randomIndex3].phone}`;
    url3.href = `${members[randomIndex3].website}`;
    url3.innerHTML = `${members[randomIndex3].website}`;
    logo3.src = `https://nstod2.github.io/wdd230/chamber/images/${members[randomIndex3].imagename}`;
    logo3.alt = `${members[randomIndex3].name}`;

    business3.appendChild(logo3);
    business3.appendChild(slogan3);
    business3.appendChild(address3);
    business3.appendChild(phone3);
    business3.appendChild(url3);
}

getRandomMember(url);

