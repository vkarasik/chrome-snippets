var sku = [];
var id = [];
var list = document.querySelectorAll('.list tbody tr');

for (var row of list) {
    if (row.rowIndex > 1) {
        sku.push(row.cells[3].innerHTML);
        id.push(row.cells[4].innerHTML);
    }
}

var batString = "";
for (i = 0; i < sku.length; i++) {
    renameStr += `ren ${sku[i]} ${id[i]}\n`;
}
console.log(batString);