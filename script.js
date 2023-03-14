const inputElement = document.querySelector('.inputField');
const btnElement = document.querySelector('.btn');
const toDoContainerElement = document.querySelector('.toDoContainer');


btnElement.addEventListener('click', function(){
  const item = document.createElement('li');
  item.innerText = inputElement.value;
  if (inputElement.value.length === 0) {
    return false;
    }
  item.classList.add('toDoAdded');
  toDoContainerElement.appendChild(item);
  inputElement.value = '';

item.addEventListener('click', function(){
    item.classList.add('toDoCompleted');
})

item.addEventListener('dblclick', function(){
    toDoContainerElement.removeChild(item);
})
})