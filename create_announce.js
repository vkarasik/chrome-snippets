// Анонс для категорий главной страницы СЦ

let items = document.querySelectorAll('.bxr-element-name a');
let announce = '';

for(let item of items){
    announce += `<a href="${item.pathname}">${item.outerText}</a> | `
}

console.log(announce);

// Output: <a href="/services/remont-noutbukov/zamena-matritsy-noutbuka/">Замена матрицы ноутбука</a> | <a href="/services/remont-noutbukov/zamena-modulnykh-komponentov/">Замена модульных компонентов</a>