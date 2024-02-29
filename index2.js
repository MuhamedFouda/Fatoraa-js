let section = document.querySelector("#allproduct")
let table = document.querySelector('table tbody')

let products = [
    { id: 12, name: "t-shirt Small ", price: 200, size: "small", color: "red" , stockqnty:7 },
    { id: 13, name: "t-shirt Midum ", price: 400, size: "midum", color: "black" , stockqnty:5},
    { id: 14, name: "t-shirt Large", price: 600, size: "large", color: "yellow", stockqnty:4 },
    { id: 15, name: "t-shirt Xlarge", price: 800, size: "x-large", color: "green" , stockqnty:3}
]
products.forEach((tshirt, index) => {
    section.innerHTML +=
        `<putton class="btn btn-primary" onclick="addproducttofatora(${index})">${tshirt.name} </putton>`
});

fatora = []
function addproducttofatora(index) {
    let productid = products[index].id;
    let fatoraproductid = fatora.find((tshirt) => {
        return tshirt.id == productid
    })
    if (fatoraproductid == undefined) {
        products[index].qnty = 1;
        fatora.push(products[index])
        renderFatore()
    }
}

function renderFatore() {
    table.innerHTML = ""
    fatora.forEach((tshirt, index) => {
        table.innerHTML += `
        <tr>
        <th> ${index + 1} </th>
        <th> ${tshirt.name} </th>
        <th> ${tshirt.price} </th>
        <th> ${tshirt.size}</th>
        <th> ${tshirt.color}</th>
        <th> <button class="btn btn-danger" onclick="decress(${index})"> - </button> ${tshirt.qnty} <button class="btn btn-success" onclick="incress(${index})"> + </button></th>
        <th> ${tshirt.price * tshirt.qnty}</th>
        <th><button class="btn btn-danger" onclick="removeelementformfatore(${index})"> Del Element </button></th>

    </tr>
        `
    })
}

function removeelementformfatore(index){
    fatora.splice(index,1)
    renderFatore()
}


function decress(index) {
    if(fatora[index].qnty>1){
        fatora[index].qnty--
        renderFatore()
    }else{
        removeelementformfatore()
    }
}

function incress(index) {
    if(fatora[index].stockqnty>fatora[index].qnty){
        fatora[index].qnty++
        renderFatore()
    }
}







