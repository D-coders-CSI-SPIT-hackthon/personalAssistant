document.getElementById("add");


function clearList() {
    localStorage.clear();
    update();
    console.clear();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonStr);
    }
    tableBod = document.getElementById('tableBody');
    let str = ""
    itemJsonArray.forEach((element, index) => {
        str += `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-primary" onClick="deleted(${index})">Delete</button></td>
                    </tr>`;
    });
    tableBod.innerHTML = str;
}

function getupdate() {
    let tite = document.getElementById('title');
    let dese = document.getElementById('description');
    let tit = tite.value;
    let desc = dese.value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    tableBod = document.getElementById('tableBody');
    let str = ""
    itemJsonArray.forEach((element, index) => {
        str += `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-primary" onClick="deleted(${index})">Delete</button></td>
                    </tr>`;
        console.log(`Items Now : ` + localStorage.getItem('itemsJson'));
    });
    tableBod.innerHTML = str;
    tite.value = "";
    dese.value = "";
    update();

}

add.addEventListener("click", getupdate);
update();

function deleted(itemindex) {
    itemJsonStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonStr);
    itemJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
    console.log(`After Delete : ` + localStorage.getItem('itemsJson'))
}
console.log(`Items : ` + localStorage.getItem('itemsJson'));