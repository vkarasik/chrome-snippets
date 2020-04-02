// Вывести на страницу большие картинки

let images = document.querySelectorAll('.product-gallery__thumb-img');
let body = document.body;
body.innerHTML = '';

for(let img of images){
    let image = document.createElement('img');
    image.src = img.src.replace(/200x200/g, 'large');
    body.append(image);
}