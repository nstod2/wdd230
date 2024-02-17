const url = "https://nstod2.github.io/wdd230/chamber/data/members.json";
const mcards = document.querySelector('#member-cards');

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        
        let card = document.createElement('section');
        let 
    });
}