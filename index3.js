// let user={
//     name:"muhamed",
//     age:25,
//     gender:"male"
// }

// let userData={
//     userName:"muhamed",
//     email:"muhamed@gmail.com",
//     password:123456
// }

// let  userjson = JSON.stringify(userData);
// let userjsonoff=JSON.parse(userjson)
// console.log(userjson)
// console.log(userjsonoff)


// let body=document.querySelector("body")
// let mood="dark";
// localStorage.setItem("themood",mood)

// let Mood=localStorage.getItem("themood");
// if(Mood=="dark"){
//     body.style.backgroundColor="black"
// }else{
//     body.style.backgroundColor="white"

// }



// let userData={
//     userName:"muhamed",
//     email:"muhamed@gmail.com",
//     password:123456
// }

// let userJson=JSON.stringify(userData)
// localStorage.setItem("userData",userJson)




// let userName=document.querySelector("#userName")
// let userPassword=document.querySelector("#userPassword")

// let user=localStorage.getItem("userData")
// let user2=JSON.parse(user)
// console.log(user2)
// function login(){
//     // let nam=userName.value;
//     // let pass=userPassword.value;
//     if(userName.value==user2.userName && userPassword.value==user2.password){
//         alert("your is login success")
//     }else{
//         alert("your login is failed")
//     }
// }



// let input=document.querySelector("#userName")
// input.addEventListener("mouseenter",()=>{
// input.style.backgroundColor="green"
// })

// input.addEventListener("keyup",()=>{
// console.log(input.value)

// // input.style.backgroundColor="white"
// })




// let input=document.querySelector("#userName")
// let input2=document.querySelector("#userPassword")
// let num=[1,2,3,4,5,6,7,8,9,0]
// input.addEventListener("keypress",function (event){
// if(num.indexOf(+event.key)!= -1){
//     event.preventDefault()
// } 
// if(input.value.length>10){
//     event.preventDefault()
// } 
// })

// input2.addEventListener("keypress", function(event){
//     if(num.indexOf(+event.key) == -1){
//         event.preventDefault()

//     }
// })

//  input2.addEventListener("paste",function(event){
//     event.preventDefault()
//  })


//  input.addEventListener("copy",function(event){
//     event.preventDefault()
//  })
// input.addEventListener("keypress",function(event){
// if(event.keyCode==32){
//     event.preventDefault()
// }
// })


// window.addEventListener("mousemove",function(event){
//     console.log(event.screenX)
// })




let content = document.querySelector(".content")
function render() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        let resarray = res.data;
        content.innerHTML=""
        resarray.forEach(element => {
            content.innerHTML +=
                `
        <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `

        });
    })
}

function more() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        let resarray = res.data;
        resarray = resarray.filter((el) => {
            return +el.price >= 50;
        })
        content.innerHTML=""

        resarray.forEach(element => {
            content.innerHTML +=
                `
        <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `

        });
    })

}

function less() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        let resarray = res.data;
        resarray = resarray.filter((el) => {
            return +el.price <= 50;
        })
        resarray.forEach(element => {
            content.innerHTML +=
                `
        <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `

        });
    })

}
