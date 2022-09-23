// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const itemOfUl = document.querySelector('.menu__item_spoiler')
const hiddenSubMenu = document.querySelector('.menu__catalog-list')
const parentIconInfo = document.querySelector('.swiper__wrapper')
const iconInfo = document.querySelectorAll('.cards__icon-info')
const iconInfoOpen = document.querySelectorAll('.cards__icon-info-open')
const cardCollection = document.querySelectorAll('.cards__card')

document.addEventListener('mouseover', (event) => {
    if(event.target.closest('.menu__item_spoiler')) {
        itemOfUl.classList.add('_active')
        hiddenSubMenu.classList.add('_active')
    }
})

document.addEventListener('mouseout', (event) => {
    if(event.relatedTarget.closest('.menu__catalog-list')) {
        console.log('не убираем')
    } else {
        itemOfUl.classList.remove('_active')
        hiddenSubMenu.classList.remove('_active')
    }
})


parentIconInfo.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('cards__icon-info')) {
        cardCollection.forEach(element => {
            if(element == event.target.parentNode) {
                event.target.childNodes[1].classList.add('_active')
                if(event.target.closest('.swiper-slide-next')) {
                    event.target.childNodes[1].classList.add('_transfrm')
                }
            }
        });
    }
})
parentIconInfo.addEventListener('mouseout', (event) => {
    if(event.target.classList.contains('cards__icon-info')) {
        cardCollection.forEach(element => {
            if(element == event.target.parentNode) {
                event.target.childNodes[1].classList.remove('_active')
            }
        });
    } 
})


if (document.documentElement.clientWidth < 768) {
    const slideCollection = document.querySelectorAll('.swiper__slide')
const cardsContainer = document.querySelector('.cards__container')

window.onload = function() {
    slideCollection.forEach(element => {
        if(element.classList.contains('swiper-slide-active')) {
            element.querySelector('.cards__card').style.backgroundColor = '#fff'
            element.nextElementSibling.querySelector('.cards__card.card.card_2').classList.add('_change-next')
        } 
    });
 };

cardsContainer.addEventListener('click', (event) => {
    if(event.target.closest('.cards__right-arrow')) {
        cardsContainer.querySelector('.swiper-slide-active').firstElementChild.classList.remove('_change-next')
        cardsContainer.querySelector('.swiper-slide-active').firstElementChild.style.backgroundColor = 'white'
        cardsContainer.querySelector('.swiper-slide-prev').firstElementChild.style.backgroundColor = ''
        cardsContainer.querySelector('.swiper-slide-next').firstElementChild.style.backgroundColor = ''
        cardsContainer.querySelector('.swiper-slide-next').firstElementChild.classList.add('_change-next')
    } else if(event.target.closest('.cards__left-arrow')) {
        cardsContainer.querySelector('.swiper-slide-next').firstElementChild.classList.add('_change-next')
        cardsContainer.querySelector('.swiper-slide-active').firstElementChild.style.backgroundColor = 'white'
        cardsContainer.querySelector('.swiper-slide-next').firstElementChild.style.backgroundColor = ''
    }
})

}