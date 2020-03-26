let numbers = [];
let list = document.querySelectorAll('.list tbody tr');
for (i = 0; i < list.length; i++) {
    if (list[i].className == " odd" || list[i].className == " even") {
        if (list[i].cells[13].innerHTML == "&nbsp;") {
            if (list[i].cells[11].innerHTML != "&nbsp;")
                numbers.push(list[i].cells[11].innerHTML)
        }
    }
}
let xcopyString = "";
for(i=0;i<numbers.length; i++){
    xcopyString += `xcopy /S /E /Y "\\\\srv-mail01\\1C_share\\discount\\${numbers[i]}" "C:\\Users\\v.karasik\\Desktop\\ImgMin\\${numbers[i]}\\"\n`;
}
console.log(xcopyString);