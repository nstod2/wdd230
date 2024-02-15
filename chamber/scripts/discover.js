const daysDisplay = document.querySelector('#days');
const msToDays = 84600000;

let lastVisit = Number(localStorage.getItem('lastVisit-ms')) || 0;

if (lastVisit !== 0) {
    let todayVisit = Date.now();
    let days = (todayVisit - lastVisit) / msToDays;
    if (days < 1) {
        daysDisplay.textContent = 'Back so soon!  Awesome!';
    } else {
        daysDisplay.textContent = `You last visited ${days.toFixed(0)} days ago.`;
    }
    localStorage.setItem('lastVisit-ms', todayVisit);
} else {
    let todayVisit = Date.now();
    daysDisplay.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisit-ms', todayVisit);
}