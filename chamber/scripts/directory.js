const url = "https://nstod2.github.io/wdd230/chamber/data/members.json";
const mcards = document.querySelector('.grid');

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let company = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let logo = document.createElement('img');

        company.textContent = `${member.name}`;
        company.classList.add('nobusname');
        address.textContent = `${member.street} Colorado Springs, CO ${member.zipcode}`;
        phone.textContent = `${member.phone}`;
        url.href = `${member.website}`;
        url.innerHTML = `${member.website}`;
        logo.classList.add('buslogo');
        logo.src = `https://nstod2.github.io/wdd230/chamber/images/${member.imagename}`;
        logo.alt = `${member.name}`;

        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        mcards.appendChild(card);
    });
}

getMemberData(url);

const busimg = document.querySelector('.buslogo');
const coname = document.querySelector('.nobusname');
const gridbtn = document.querySelector('#grid');
const listbtn = document.querySelector('#list');

gridbtn.addEventListener('click',() => {
    mcards.classList.add('grid');
    mcards.classList.remove('list');
})

listbtn.addEventListener('click', () => {
    mcards.classList.add('list');
    mcards.classList.remove('grid');
})