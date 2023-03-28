const rounds = document.querySelectorAll("body .pick-and-feed .scale .rounds .round");
const nums = document.querySelectorAll("body .pick-and-feed .scale .amounts .sum");
const menu_but = document.querySelector('header .menu');
const burger = document.querySelector('header .burger_menu');
const back_burder = document.querySelector('.burger_background');
const back_close = document.querySelector('header .burger_menu .close_burger');
const numPlace = document.querySelector('input[type="number"]');

let amountCur;

function change(i) {

    removeActiv();
    event.target.classList.add('active');
    rounds[i].classList.add('active');
    nums[i].classList.add('actv');
    numPlace.value = nums[i].innerText.slice(1, nums[i].innerText.length);
}

function removeActiv() {
    for (let i = 0; i < rounds.length; i++) {
        if (rounds[i].classList.contains('active')) {
            rounds[i].classList.remove('active');
        }
        if (nums[i].classList.contains('actv')) {
            nums[i].classList.remove('actv');
        }

    }
}

function burgerMenu() {
    back_burder.style.display = 'flex';
    burger.style.display = 'flex';
}

function burgerMenuClose() {
    back_burder.style.display = 'none';
    burger.style.display = 'none';
}

for (let i = 0; i < rounds.length; i++) {
    rounds[i].addEventListener('click', () => {
        change(i);
    });
}

menu_but.addEventListener('click', () => {
    burger.style.display = 'flex';
})

window.addEventListener('resize', () => {
    screen_size = document.documentElement.clientWidth;
    if (screen_size > 640) {
        burgerMenuClose();
    }
})

menu_but.addEventListener('click', burgerMenu)

back_close.addEventListener('click', burgerMenuClose)
back_burder.addEventListener('click', burgerMenuClose)

numPlace.addEventListener('input', function(event) {
    if (numPlace.value.length > 4) {
        numPlace.value = 9999;
    }

    for (let i = 0; i < nums.length; i++) {
        amountCur = (nums[i].innerText.slice(1, nums[i].innerText.length));
        if (numPlace.value == amountCur) {
            change(i);
        }
    }
})