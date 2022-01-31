'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const red = 'red';
const orange = 'orange';
const yellow = 'yellow';
// const yellowGreen = 'yellowgreen';
const green = 'green';
const blue = 'blue';
const indigo = 'indigo';
const purple = 'purple';

const japanese2 = {
    red:'赤',
    orange: '橙',
    yellow: '黄',
    green: '緑',
    blue: '青',
    indigo: '藍',
    purple: '紫',
}

const american2 = {
    red:'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    purple: 'purple',
}

const germany2 = {
    red:'rot',
    orange: 'Orange',
    yellow: 'Gelb',
    green: 'Grün',
    blue: 'Blau',
}

const chinese2 = {
    red:'红色的',
    orange: '橘子',
    yellow: '黄色的',
    green: '绿色',
    blue: '蓝色',
}

const indonesia2 = {
    red:'merah',
    yellow: 'kuning',
    green: 'hijau',
    blue: 'Biru',
}

// const african = [red, orange, yellow, yellowGreen, green, blue, indigo, purple];
const japanese = [red, orange, yellow, green, blue, indigo, purple];
const american = [red, orange, yellow, green, blue, purple];
const germany = [red, orange, yellow, green, blue];
const chinese = [red, orange, yellow, green, blue];
const indonesian = [red, yellow, green, blue];

const h1 = document.querySelector('h1');
const japan = document.querySelector('#japan');
const USA = document.querySelector('#USA');
const german = document.querySelector('#german');
const china = document.querySelector('#china');
const indonesia = document.querySelector('#indonesia');

function makeTitle() {
    const rainbow = 'rainbow';
    let title = 'Is it '
    let makeHtml = title;
    let i = 0;

    for (const word of rainbow) {
        makeHtml = makeHtml + `<span class=${japanese[i]}>${word}</span>`
        i++;
    }

    h1.innerHTML = makeHtml+"?";
}

function makeAnswer (language) {
    const answer = document.querySelector('.answer');
    answer.innerHTML = ''
    const span = document.createElement('span');
    span.style.textAlign = 'center'
    const colors = language.length;
    
    span.textContent = `
    The color of the rainbow is ${colors} colors`;
    answer.appendChild(span);
}

function choseCountry(country) {
    let language;
    if(country === 'japan'){
        language = japanese;
    } else if (country === 'USA'){
        language = american;
    } else if (country === 'german') {
        language = germany;
    } else if (country === 'china') {
        language = chinese;
    } else if (country === 'indonesia') {
        language = indonesian;
    }

    makeAnswer(language);
}

function makeColor(colorLanguage) {
    const createWords = document.querySelector('.color');
    createWords.innerHTML = ''
    for(const color in colorLanguage) {
        const span = document.createElement('span');
        span.className = color;
        span.textContent = `${colorLanguage[color]} `;
        createWords.appendChild(span);
    }
}

japan.addEventListener('click', function() {
    const selectCountry = 'japan';
    const sayColor = japanese2;
    makeColor(sayColor);
    choseCountry(selectCountry);
});

USA.addEventListener('click', function() {
    const selectCountry = 'USA';
    const sayColor = american2;
    makeColor(sayColor);
    choseCountry(selectCountry);
});

german.addEventListener('click', function() {
    const selectCountry = 'german';
    const sayColor = germany2;
    makeColor(sayColor);
    choseCountry(selectCountry);
});

china.addEventListener('click', function() {
    const selectCountry = 'china';
    const sayColor = chinese2;
    makeColor(sayColor);
    choseCountry(selectCountry);
});

indonesia.addEventListener('click', function() {
    const selectCountry = 'indonesia';
    const sayColor = indonesia2;
    makeColor(sayColor);
    choseCountry(selectCountry);
});

makeTitle();
// makeAnswer(japanese);

