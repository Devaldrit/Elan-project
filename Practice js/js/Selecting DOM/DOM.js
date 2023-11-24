//Selceting elements in the DOM

// GetElementById()
const maintitle = document.getElementById('maintitle')
console.log(maintitle);

// GetElementByClassName()
const simpletitle = document.getElementsByClassName('simpletitle')
console.log(simpletitle);

// GetElementsByTagName()
const paragraph = document.getElementsByTagName('p')
console.log(paragraph);

//querySelector
const list = document.querySelector('ul')
console.log(list);

//querySelectorAll()
const allList = document.querySelectorAll('li')
console.log(allList);
