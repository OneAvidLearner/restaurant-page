import './style.css'


function contacts (){

    let contact = document.createElement('div');
  

    let header = document.createElement('h1');
    header.textContent =  `Contact`;

    

    let details = document.createElement('div');
    details.classList.add('cards');
    details.classList.add('multiLine');

    

    let name = document.createElement('p');
    let number = document.createElement('p');
    let email = document.createElement('p');


    name.textContent =  'Mr Dr Chef Sr ';
    number.textContent = '123 456 7890 ';
    email.textContent = 'realEmail@email.com ';


   
    details.appendChild(name);
    details.appendChild(number);
    details.appendChild(email);



    contact.appendChild(header);
    contact.appendChild(details);
    


    return contact;


}


export {contacts};