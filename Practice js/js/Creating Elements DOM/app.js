//Creating Elements with DOM

const ListItemms = document.querySelector('div'); //Select first your element into variable 
const ul = document.createElement('ul'); // create the element which you'r going to use
ListItemms.append(ul); //add the element wich you have created into the variable have select the place to your element
console.log(ListItemms);

const List = document.querySelector('ul')
const newline = document.createElement('li');
List.append(newline); // Append method help you to add elements
console.log(List);