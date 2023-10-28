const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li')
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
}


buttonEl.addEventListener('click', addGoal)