let counter = 0;

const spanCounter = document.querySelector('span.counter');
const btnAdd = document.querySelector('button');
const btnMinus = document.querySelector('button:nth-child(2)');

btnAdd.addEventListener('click', function () {
    counter++;
    spanCounter.textContent = counter;
})

btnMinus.addEventListener('click', function () {
    counter--;
    spanCounter.textContent = counter;
})