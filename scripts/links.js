const baseURL = "https://nstod2.github.io/wdd230/";
const linksURL = "https://nstod2.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    const weekList = document.querySelector('#activities');
    weeks.forEach((week) => {
        let numLinks = 1;
        let listActivities = document.createElement('li');
        let weekNum = document.createElement('span');
        weekNum.textContent = `${week}`;
        listActivities.appendChild(weekNum);
        week.links.forEach((link) => {
            let activity = document.createElement('a');
            if (link.url[0] === 'w') {
                activity.href = `${baseURL}${link.url}`;
            } else {
                activity.href = `${link.url}`;
            }
            if (numLinks === 1) {
                activity.innerHTML = `${link.title}`;
            } else {
                activity.innerHTML = ` | ${link.title}`;
            }
            numLinks++;
            listActivities.appendChild(activity);
        })
        weekList.appendChild(listActivities);  
    });
}

getLinks();