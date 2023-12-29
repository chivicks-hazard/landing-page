// const showPasswordBtn = document.querySelector('.show-password');
// const passwordInput = showPasswordBtns.previousElementSibling;
const cta = document.querySelector('.cta');
const specialOffer = document.querySelector('.special-offer');
const date = document.getElementById('date');

let bgcSpecial = true;
setInterval(() => {
    if (bgcSpecial) {
        specialOffer.style.background = `url('images/food 5.jpg')`;
        bgcSpecial = false
        } else {
            specialOffer.style.background = `url('images/food 3.jpg')`;
            bgcSpecial = true;
        }
}, 5000);

function changeYear() {
    var year = new Date().getFullYear();
    date.textContent = year;
}

changeYear();