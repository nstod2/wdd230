const baseURL = "https://nstod2.github.io/wdd230/";
const linksURL = "https://nstod2.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let numLinks = 1;
        
        week.forEach((links) =>{
            numLinks = 1;

        })
        
    });
}

    getLinks();