const btn = document.getElementById('changeColor');

let randomNumber = () => {
    let randomNum = (Math.floor(Math.random() * 256));
    return randomNum
}

let changeColor = () => {
    let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = randomColor;
}

window.addEventListener('load', changeColor);
btn.addEventListener('click', changeColor);