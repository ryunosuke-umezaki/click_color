const red = document.getElementById('red');
const blue  = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const purple = document.getElementById('purple');
const text = document.getElementById('clickColorText');

text.textContent = '色をクリックして選択してください'

const color = [red, blue, green, yellow, purple];

const resetBorders = () => {
    color.forEach(element => {
        element.style.borderColor = 'gray';
        element.style.borderStyle = 'solid';
        element.style.borderWidth = '2px';
    });
}


// red.addEventListener('click', function(event) {

var isAlreadySelected = false;

red.addEventListener('click', () => {
    if(isAlreadySelected) {
        resetBorders();
        text.textContent = '色をクリックして選択してください';
        text.style.color = 'black';
        isAlreadySelected = false;
    } else {
        resetBorders();
        red.style.borderColor = 'black';
        red.style.borderWidth = '4px';
        red.style.borderStyle = 'ridge';
        text.textContent = '選択された色：赤'
        text.style.color = 'red';
        isAlreadySelected = true;
    }
});

blue.addEventListener('click', function(event) {
    resetBorders();
    blue.style.borderColor = 'black';
    blue.style.borderWidth = '4px';
    blue.style.borderStyle = 'ridge';
    text.textContent = '選択された色：青'
    text.style.color = 'blue';
    console.log(event.isTrusted);
});

green.addEventListener('click', () => {
    resetBorders();
    green.style.borderColor = 'black';
    green.style.borderWidth = '4px';
    green.style.borderStyle = 'ridge';
    text.textContent = '選択された色：緑'
    text.style.color = 'green';
});

yellow.addEventListener('click', () => {
    resetBorders();
    yellow.style.borderColor = 'black';
    yellow.style.borderWidth = '4px';
    yellow.style.borderStyle = 'ridge';
    text.textContent = '選択された色：黄'
    text.style.color = 'yellow';
});

purple.addEventListener('click', () => {
    resetBorders();
    purple.style.borderColor = 'black';
    purple.style.borderWidth = '4px';
    purple.style.borderStyle = 'ridge';
    text.textContent = '選択された色；紫'
    text.style.color = 'purple';
});
