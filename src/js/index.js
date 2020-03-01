// import 'bootstrap/js/dist/carousel';
import 'bootstrap'
import ymaps from 'ymaps';
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

document.querySelector('.disciplines__items').addEventListener('click',
    function (e) {
        if (e.target.tagName !== 'H2' && e.target.tagName !== 'P' && e.target.tagName !== 'LI') {
            console.log(e.target);
            return;
        }
        let item = (e.target.tagName !== 'LI') ?
            e.target.parentNode : e.target;
        let childrenContainer = item.querySelector('p');
        if (!childrenContainer) return;
        if (childrenContainer.classList.contains('disciplines__item-description--hide')) {
            childrenContainer.classList.remove('disciplines__item-description--hide');
            item.classList.add("disciplines__item--open");
        } else {
            childrenContainer.classList.add('disciplines__item-description--hide');
            item.classList.remove("disciplines__item--open");
        }
    },
    false);


var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

ymaps
    .load('https://api-maps.yandex.ru/2.1/?apikey=e2acb809-b600-4370-add3-4d063b0d78a8&lang=ru-RU')
    .then(maps => {
        const map = new maps.Map('map', {
            center: [59.957723, 30.307774],
            zoom: 16,
            controls: []
        });
        const myPlacemark = new maps.Placemark([59.956160, 30.309373],
            {iconCaption: 'Кронверский проспект, 49'},
            {preset: 'islands#redDotIconWithCaption'});
        map.geoObjects.add(myPlacemark);
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

document.querySelector('.modal__dialog').addEventListener('submit', function (evn) {
    $('#modal').modal('hide');
    $('#success').modal('show');
});