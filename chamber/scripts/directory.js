const url = "https://nstod2.github.io/wdd230/chamber/data/members.json";

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    const mcards = document.querySelector('.grid');
    members.forEach((member) => {

        let card = document.createElement('section');
        let company = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let logo = document.createElement('img');

        company.textContent = `${member.name}`
        address.textContent = `${member.street} Colorado Springs, CO ${member.zipcode}`;
        phone.textContent = `${member.phone}`;
        url.textContent = `${member.website}`;
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