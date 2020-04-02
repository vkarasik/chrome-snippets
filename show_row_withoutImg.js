// Показать строки без фото

let cols = document.querySelectorAll('.col_photo');

for(let col of cols){
    if(col.innerHTML != ''){
        col.parentElement.style.display = 'none';
    }
}