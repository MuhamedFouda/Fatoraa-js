let section = document.querySelector("#allproduct")
let table = document.querySelector("table tbody")
let iphones = [
    { id: 12, name: "iphone 7", price: 400, color: 'black', stockqnty: 10 },
    { id: 13, name: "iphone 9", price: 500, color: 'black', stockqnty: 5 },
    { id: 14, name: "iphone X", price: 600, color: 'black', stockqnty: 7 },
    { id: 15, name: "iphone 12", price: 800, color: 'black', stockqnty: 6 }
];
let phonesplus600cash = iphones.find((phone) => {
    return phone.name == "iphone 9";
})
console.log(phonesplus600cash)

let fatora = [];
renderFatora()
iphones.forEach((phone, index) => {
    section.innerHTML += `
<button class="btn btn-primary" onclick="addProductToFatora(${index})" >${phone.name}</button>
`
});

function addProductToFatora(index) {
    let phoneid = iphones[index].id
    let res = fatora.find((phone) => {
        return phone.id == phoneid;
    })
    if (res == undefined) {
        iphones[index].qnty = 1;
        fatora.push(iphones[index])
        renderFatora()
    }
}

function renderFatora() {
    table.innerHTML = "";
    fatora.forEach((phone, index) => {
        table.innerHTML += `
        <tr>
            <th> ${index + 1} </th>
            <th> ${phone.name} </th>
            <th> ${phone.price} </th>
            <th> ${phone.color} </th>
            <th><button class=" btn btn-danger" onclick="decress(${index})"> - </button> ${phone.qnty} <button class=" btn btn-primary" onclick="incress(${index})"> + </button></th>
            <th> ${phone.price * phone.qnty} </th>
            <th><button class="btn btn-danger" onclick="removeitemfromfatora(${index})"> DEl </button> </th>
        </tr>
        `
    })
}

function removeitemfromfatora(index) {
    fatora.splice(index, 1)
    renderFatora()
}

function incress(index) {
    if (fatora[index].stockqnty > fatora[index].qnty) {
        fatora[index].qnty++;
        renderFatora()
    } else {
        alert("You have max quantity")
    }
}


function decress(index) {
    if (fatora[index].qnty > 1) {
        fatora[index].qnty--;
        renderFatora()
    } else {
        removeitemfromfatora()
    }
}