const cards = document.querySelectorAll('.cards .card');
const menu_but = document.querySelector('header .menu');
const burger = document.querySelector('header .burger_menu');
const back_burder = document.querySelector('.burger_background');
const back_close = document.querySelector('header .burger_menu .close_burger');
const comments = document.querySelectorAll('.testimonials .comments .border_card');
const wind = document.querySelector('.testimonials .popup_background');
const leftButPics = document.querySelector('.pets .carousel .left .round');
const rightButPics = document.querySelector('.pets .carousel .right .round');
const cardsItems = document.querySelectorAll('.pets .carousel .card_container .cards');
const scroll = document.querySelector('.scrolling_border input');


let beforeComment = scroll.value;
let screen_size = document.documentElement.clientWidth;
let currentItem = 1;
let currentCommentFirst = 0;
let currentCommentLast = 3;
let startX = 490;
let isEnabled = true;
let numbersList = new Set();
let n, cardsToPut, next;

const animals = [{
    name: "giant Pandas",
    link: "pandas",
    description: "Native to Southwest China",
    food: "banana-bamboo_icon"
}, {
    name: "Gorillas",
    link: "gorilla",
    description: "Native to Congo",
    food: "banana-bamboo_icon"
}, {
    name: "Two-toed Sloth",
    link: "sloth",
    description: "Mesoamerica, South America",
    food: "banana-bamboo_icon"
}, {
    name: "cheetahs",
    link: "cheetahs",
    description: "Native to Africa",
    food: "meet-fish_icon"
}, {
    name: "Eagles",
    link: "eagle",
    description: "Native to South America",
    food: "meet-fish_icon"
}, {
    name: "Penguins",
    link: "pinguin",
    description: "Native to Antarctica",
    food: "meet-fish_icon"
}, {
    name: "Alligators",
    link: "alligators",
    description: "Native to Southeastern U. S.",
    food: "meet-fish_icon"
}]

const commentsList = [{
    name: "Joseph Smith",
    photo: "burd_user",
    where_and_when: "Local Georgia&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Two days ago"
}, {
    name: "Jane Lane",
    photo: "monke_user",
    where_and_when: "Local Austalia&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}, {
    name: "Paul Pitters",
    photo: "panda_user",
    where_and_when: "Local Poland&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}, {
    name: "Elly White",
    photo: "ping_user2",
    where_and_when: "Local Unated States&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Today"
}, {
    name: "Anne-Marie Paulsen",
    photo: "monke_user",
    where_and_when: "Local Serbia&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}, {
    name: "Gordon Anders",
    photo: "panda_user",
    where_and_when: "Local Latvia&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Today"
}, {
    name: "Kyle Doe",
    photo: "monke_user",
    where_and_when: "Local Germany&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}, {
    name: "Bill Cruse",
    photo: "burd_user",
    where_and_when: "Local Germany&nbsp;&nbsp;&#8226;&nbsp;&nbsp;3 days ago"
}, {
    name: "Angela Bauman",
    photo: "monke_user",
    where_and_when: "Local Irlang&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}, {
    name: "Kylie Oliver",
    photo: "panda_user",
    where_and_when: "Local Chech Republic&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Today"
}, {
    name: "Terry Maison",
    photo: "burd_user",
    where_and_when: "Local Romania&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Yesterday"
}]

function showInfo(event) {
    event.target.style.border = "none";
    event.target.querySelector('.signature').classList.add('darker');
    event.target.querySelector('img').classList.add('darkerImg');
}

function hideInfo(event) {
    event.target.style.border = "1px solid #F9804B";
    event.target.querySelector('.signature').classList.remove('darker');
    event.target.querySelector('img').classList.remove('darkerImg')
}


function burgerMenu() {
    back_burder.style.width = document.documentElement.clientWidth;
    back_burder.style.height = document.documentElement.clientHeight;
    back_burder.style.display = 'flex';
    burger.style.display = 'flex';
}

function burgerMenuClose() {
    back_burder.style.display = 'none';
    burger.style.display = 'none';
    wind.style.display = 'none';
}

function popUpOpen(event) {
    back_burder.style.width = document.documentElement.clientWidth;
    back_burder.style.height = document.documentElement.clientHeight;
    back_burder.style.display = 'flex';
    wind.style.display = 'flex';
    wind.querySelector('.border_card ').innerHTML = event.currentTarget.innerHTML;
}

function popUpClose() {
    back_burder.style.display = 'none';
    wind.style.display = 'none';
}

function makingPics() {
    cardsToPut = [];
    cardsToPut = cardsItems[currentItem].querySelectorAll('.card');
    let link = "../../assets/";
    for (let i = 0; i < numbersList.length; i++) {
        cardsToPut[i].innerHTML = `<div class="card">
        <img src="${link + 'images/' + animals[numbersList[i]]['link'] + '.jpg'}" class="animal" width="366" height="366" />
        <div class="signature">
            <div class="text-signature">
                <p>${animals[numbersList[i]]['name']}</p>
                <p>${animals[numbersList[i]]['description']}</p>
            </div>
            <img src="${link + 'icons/' + animals[numbersList[i]]['food'] + '.svg'}" class="animal-food" width="49" height="38" />
        </div>
        </div>`;
    }
}

function picGenerator() {
    numbersList = [];
    let a = new Set();
    while (a.size < 6) {
        n = Math.floor(Math.random() * 7);
        a.add(n);
    }
    for (let i of a) {
        numbersList.push(i)
    }

    makingPics();
}

function nextCurrentItem(newNum) {
    currentItem = (newNum + cardsItems.length) % cardsItems.length;
}

function hideCardsItem(side) {
    isEnabled = false;
    cardsItems[currentItem].classList.add(side);
    cardsItems[currentItem].addEventListener('animationend', function() {
        this.classList.remove('activeCards', side);
    })

}

function showCardsItem(side) {
    cardsItems[currentItem].classList.add('next', side);
    cardsItems[currentItem].addEventListener('animationend', function() {

        this.classList.remove('next', side);
        this.classList.add('activeCards');
        isEnabled = true;
    })
}

function previousCardsItem(newNum) {
    hideCardsItem('to-right');
    nextCurrentItem(newNum - 1);
    picGenerator();
    showCardsItem('from-left');
}

function nextCardsItem(newNum) {
    hideCardsItem('to-left');
    nextCurrentItem(newNum + 1);
    picGenerator();
    showCardsItem('from-right');
}


for (let i of cards) {
    i.addEventListener('mouseenter', showInfo);
}

for (let i of cards) {
    i.addEventListener('mouseleave', hideInfo);
}


window.addEventListener('resize', () => {
    screen_size = document.documentElement.clientWidth;
    if (screen_size > 640) {
        burgerMenuClose();
    }
})

menu_but.addEventListener('click', burgerMenu);

back_close.addEventListener('click', burgerMenuClose);
back_burder.addEventListener('click', burgerMenuClose);

for (let i of comments) {
    i.addEventListener('click', popUpOpen);
}

document.querySelector(".testimonials .popup_background .cross").addEventListener('click', popUpClose);

leftButPics.addEventListener('click', function() {

    if (isEnabled) {
        previousCardsItem(currentItem);
    }
});

rightButPics.addEventListener('click', function() {

    if (isEnabled) {
        nextCardsItem(currentItem);
    }
});
// 

function generateComment(number) {
    console.log(comments[number].style.innerHTML);
}

function nextComment(start, end, side) {
    let amount = document.querySelectorAll('.testimonials .comments .border_card.active');
    console.log(amount[3]);
    comments[end + 1].classList.add('active', `to-` + side + `-comment`);
    for (let i of amount) {
        i.classList.add(`to-` + side + `-comment`);
    }

    comments[start].addEventListener('animationend', function() {
        comments[start].classList.remove('active', `to-` + side + `-comment`);
        for (let i of amount) {
            i.classList.remove(`to-` + side + `-comment`);
        }
    })

    currentCommentFirst += 1;
    currentCommentLast += 1;

}

function previousComment(start, end, side) {
    let amount = document.querySelectorAll('.testimonials .comments .border_card.active');

    for (let i of amount) {
        i.classList.add(`to-` + side + `-comment`);
    }

    comments[start].addEventListener('animationend', function() {
        comments[start - 1].classList.add(`active`);
        comments[end].classList.remove(`active`, `to-` + side + `-comment`);
        for (let i of amount) {
            i.classList.remove(`to-` + side + `-comment`);
        }

    })
    currentCommentFirst -= 1;
    currentCommentLast -= 1;

}


scroll.addEventListener('input', (event) => {

    currentComment = scroll.value;
    if (currentComment - beforeComment > 0) {
        nextComment(currentCommentFirst, currentCommentLast, 'left');
        beforeComment = +beforeComment + 1;
    } else if (currentComment - beforeComment < 0) {
        previousComment(currentCommentFirst, currentCommentLast, 'right');
        beforeComment = +beforeComment - 1;
    }
})