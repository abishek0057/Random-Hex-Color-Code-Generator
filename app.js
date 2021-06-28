const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector(".btn").addEventListener("click", () => {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomNumber = Math.trunc(Math.random() * 15) + 1;
        randomColor += hexCode[randomNumber];
        document.body.style.backgroundColor = randomColor;
        document.querySelector(".output-color").innerText = randomColor;
        document.querySelector(".btn").style.backgroundColor = randomColor;
        document.querySelector(".element").style.color = randomColor;
    }
});