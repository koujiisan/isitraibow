'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//classに使う
//文字の表示に使う
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

//DOM操作に使う
const h1 = document.querySelector('h1');
const japan = document.querySelector('#japan');
const USA = document.querySelector('#USA');
const german = document.querySelector('#german');
const china = document.querySelector('#china');
const indonesia = document.querySelector('#indonesia');

//各言語表示に使う
const japanese = {
    red:'赤',
    orange: '橙',
    yellow: '黄',
    green: '緑',
    blue: '青',
    indigo: '藍',
    purple: '紫',
}
const american = {
    red:'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    purple: 'purple',
}
const germany = {
    red:'rot',
    orange: 'Orange',
    yellow: 'Gelb',
    green: 'Grün',
    blue: 'Blau',
}
const chinese = {
    red:'红色的',
    orange: '橘子',
    yellow: '黄色的',
    green: '绿色',
    blue: '蓝色',
}
const indonesian = {
    red:'merah',
    yellow: 'kuning',
    green: 'hijau',
    blue: 'Biru',
}

//Titleの色付け用
function makeTitle() {
    const rainbow = 'rainbow';
    let makeHtml = 'Is it ';
    let i = 0;
    for (const word of rainbow) {
        makeHtml = makeHtml + `<span class=${rainbowColors[i]}>${word}</span>`
        i++;
    }
    h1.innerHTML = makeHtml+"?";
}

//各国の表示
function createCountry(selectCountry,sayColor) {
    choseCountry(selectCountry);
    makeColor(sayColor);
}

//各国の言葉で表現する
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

//国を選ぶ
function choseCountry(country) {
    switch(country) {
        case 'japan' : makeAnswer(Object.keys(japanese).length);
        case 'USA' : makeAnswer(Object.keys(american).length);
        case 'german' : makeAnswer(Object.keys(germany).length);
        case 'china' : makeAnswer(Object.keys(chinese).length);
        case 'indonesia' : makeAnswer(Object.keys(indonesian).length);
    }
}

//答えを出す
function makeAnswer (hasColor) {
    const answer = document.querySelector('.answer');
    answer.innerHTML = ''
    const span = document.createElement('span');
    span.textContent = `The color of the rainbow is ${hasColor} colors`;
    answer.appendChild(span);
}

japan.addEventListener('click', function() {
    const selectCountry = 'japan';
    const sayColor = japanese;
    createCountry(selectCountry,sayColor)
});

USA.addEventListener('click', function() {
    const selectCountry = 'USA';
    const sayColor = american;
    createCountry(selectCountry,sayColor)
});

german.addEventListener('click', function() {
    const selectCountry = 'german';
    const sayColor = germany;
    createCountry(selectCountry,sayColor)
});

china.addEventListener('click', function() {
    const selectCountry = 'china';
    const sayColor = chinese;
    createCountry(selectCountry,sayColor)
});

indonesia.addEventListener('click', function() {
    const selectCountry = 'indonesia';
    const sayColor = indonesian;
    createCountry(selectCountry,sayColor)
});

makeTitle();