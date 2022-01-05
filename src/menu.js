import './style.css'


function menu (){

    let home = document.createElement('div');



    let header = document.createElement('h1');
    header.textContent =  `Menu`;


    let main = document.createElement('div');
    main.classList.add('cards');
    main.classList.add('multiLine');

    let dish1 = document.createElement('p');
    let dish2 = document.createElement('p');
    let dish3 = document.createElement('p');

    let arr = createDishes();

    dish1.textContent = `${arr[0].name} ........$${arr[0].price}`;
    dish2.textContent = `${arr[1].name} ........$${arr[1].price}`;
    dish3.textContent = `${arr[2].name} ........$${arr[2].price}`;

    console.log(arr[0].name);

    main.appendChild(dish1);
    main.appendChild(dish2);
    main.appendChild(dish3);

    home.appendChild(header);
    home.appendChild(main);


    return home;


}

const dishes = (name, price, description) => {
    // creates the menu items

    return{ name, price, description}

} 

const createDishes = function(){

    let result = new Array (3);
    result[0] = dishes('Fried Rice', 10, 'The main staple heard round the world');
    result[1] = dishes('Jollof Rice', 10, 'The not so main staple');
    result[2] = dishes('Burger and Fries', 15, 'You\'re used to it');

    return result;
}

export {menu};