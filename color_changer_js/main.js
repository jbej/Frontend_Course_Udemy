const colors = document.querySelectorAll('div');

function changeColor() {
    document.body.className = this.className;
}

colors.forEach(function (color) {
    color.addEventListener('click', changeColor);
})