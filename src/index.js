import {homePage} from './homePage';

import {menu} from './menu';

import {contacts} from './contact';



const container = document.querySelector('#content');

const header = document.querySelector('.header');


const homeTab = document.createElement('div');
homeTab.textContent = 'Home';
const menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
const contactTab = document.createElement('div');
contactTab.textContent =  'Contact'

homeTab.classList.add('tab');
menuTab.classList.add('tab');
contactTab.classList.add('tab');


header.appendChild(homeTab);
header.appendChild(menuTab);
header.appendChild(contactTab);


homeTab.addEventListener('click', function(e){
    container.innerHTML='';
    container.appendChild(homePage());
});

menuTab.addEventListener('click', function(e){
    container.innerHTML='';
    container.appendChild(menu());
});

contactTab.addEventListener('click', function(e){
    container.innerHTML='';
    container.appendChild(contacts());
});


container.appendChild(homePage());


