clear();
let sku = document.querySelector(".article:nth-child(1) > span.value");
let imgList = document.querySelectorAll('.slides_block li');
let hostName = "https://toymafia.ru";
let wgetList = `${sku.innerHTML} \n`;
if(imgList.length > 0){
    imgList.forEach(el => {wgetList += `${hostName}${el.dataset.big_img}\n`}); 
}
else{
    let mainImg = document.querySelector('.current a');
    wgetList += `${mainImg.href}`;
}

console.log(wgetList);
copy(wgetList);
