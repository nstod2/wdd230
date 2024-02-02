const password1 = document.querySelector('#pswrd');
const password2 = document.querySelector('#pswrd2');
const msg = document.querySelector('#formmsg');
const rating = document.querySelector('#rating');
const pagerate = document.querySelector('#pagerating');
const rv = document.querySelector('#rv');

password2.addEventListener('focusout', checkSame);
rating.addEventListener('input', displayRating);
rating.addEventListener('change', displayRating);

function checkSame() {
    if (password1.value !== password2.value) {
        msg.style.display = "block";
        msg.style.color = "#9c2c13";
        password1.style.backgroundColor = "#fff0f3";
        password1.value = "";
        password2.value = "";
        password1.focus();
    } else {
        message.style.display = "none";
    }
}

function displayRating() {
    rv.innerHTML = Number(rating.value) + 1;
}