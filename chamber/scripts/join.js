const todays = new Date();
const days = todays.getDate();
const months = todays.getMonth() + 1;
const years = todays.getFullYear();
const hours = todays.getHours();
const mins = todays.getMinutes();
const secs = todays.getSeconds();
let dateTimes = months + '/' + days + '/' + years + ' ' + hours + ':' + mins + ':' + secs;

const formTime = document.querySelector('#timestamp');
formTime.value = `${dateTimes}`;