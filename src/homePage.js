import './style.css'
function homePage(){

    let home = document.createElement('div');


    let header = document.createElement('h1');
    header.textContent =  `The Cheapest Restaurant`;


    let about = document.createElement('div');
    about.classList.add('cards');

    about.textContent = 'This restaurant prides itself in providing the cheapest (and worst) service in the entire city. Do you care about saving $0.01, well, you\'ve come to the right place' ;

    let hours = document.createElement('div');
    hours.classList.add('cards');

    hours.textContent = 'Open all day everyday';

    let location = document.createElement('div');
    location.classList.add('cards');

    location.textContent = '1234 Realstreet street, RealCity'


    home.appendChild(header);
    home.appendChild(about);
    home.appendChild(hours);
    home.appendChild(location);

    return home;

}

export {homePage};