const wtoday = document.querySelector('#wtoday');
const wtomorrow = document.querySelector('#wtomorrow');
const wnextday = document.querySelector('#wnextday');

const wurl = 'https://api.openweathermap.org/data/3.0/onecall?lat=38.84&lon=-104.82&appid=fc750def0ad8258e60aec92a95a39b23&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(wurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();