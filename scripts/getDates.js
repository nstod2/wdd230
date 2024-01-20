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


