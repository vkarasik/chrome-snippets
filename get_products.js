// Get product name and link

var url = document.location.origin;
var linkArr, nameArr;

switch (url) {
    case 'https://www.ttn.by':
        linkArr = document.querySelectorAll(".product > .woocommerce-loop-product__title");
        nameArr = document.querySelectorAll(".product > .woocommerce-loop-product__title");
        break;

    case 'https://www.21vek.by':
        linkArr = document.querySelectorAll("dl > dt > a.result__link");
        nameArr = document.querySelectorAll("dl > dt > a.result__link > .result__name");
        break;

    case 'https://www.svyaznoy.by':
        linkArr = document.querySelectorAll(".b-product-block__main-link");
        nameArr = document.querySelectorAll(".b-product-block__name");
        break;

    case 'https://oz.by':
        linkArr = document.querySelectorAll(".item-type-card__content > .item-type-card__link");
        nameArr = document.querySelectorAll(".item-type-card__title");
        break;

    case 'https://imarket.by':
        linkArr = document.querySelectorAll("a.item-title");
        nameArr = document.querySelectorAll("a.item-title");
        break;

    case 'https://7745.by' :
        linkArr = document.querySelectorAll("a.item-block_name--tile");
        nameArr = document.querySelectorAll("a.item-block_name--tile");
        break;
}

var resultCsv = '';

for (i = 0; i < linkArr.length; i++) {
    resultCsv += `${nameArr[i].innerHTML};${linkArr[i].href};\n`;
}
console.log(resultCsv);