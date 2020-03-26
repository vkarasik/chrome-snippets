var tip = document.querySelectorAll('.product-tip-wrapper');
for (i = 0; i < tip.length; i++) {
    tip[i].remove();
}

var cross = document.querySelectorAll('.i-x');
for (i = 0; i < cross.length; i++) {
    cross[i].parentNode.parentNode.remove();
}

var tic = document.querySelectorAll('.i-tip');
for(i = 0; i < tic.length; i++){
    tic[i].textContent = '\u00A0'
}

var table = document.querySelector('.product-specs__main-group');
console.log(table.innerHTML);