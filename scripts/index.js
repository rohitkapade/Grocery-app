

async function getData(){
    const url = `https://grocery-masai.herokuapp.com/items`
    let data = await fetch(url)
    let data1 = await data.json()
    let res = data1.data
    console.log(res)
    appendData(res)

}

let arr = JSON.parse(localStorage.getItem("cart_items")) || []

function appendData(res){

    let groceries = document.getElementById("groceries")
    res.forEach(function(ele,ind){
        
        let card = document.createElement("div")
        card.setAttribute("class","item")

        let img = document.createElement("img")
        img.src=ele.image
        img.setAttribute("class","img")

        let name = document.createElement("h3")
        name.innerText=ele.name

        let price = document.createElement("h3")
        price.innerText=ele.price

        let button = document.createElement("button")
        button.setAttribute("class","add_to_cart")
        button.innerText="Add to cart"
        button.addEventListener("click",function(){
            addToCart(ele,res)
        })

        card.append(img,name,price,button)
        groceries.append(card)
        
    });

}






let total = 0

for (let j=0; j<arr.length; j++){
    total = total + arr[j].price
}


let balace = document.getElementById("wallet")
balace.innerText=700-total


function addToCart(ele,res){
    
    let real = balace.innerText-ele.price
    console.log(real)
    if (real>=0){
        arr.push(ele)
        balace.innerText= balace.innerText-ele.price
        console.log(balace.innerText)
        console.log("rohit")
        localStorage.setItem("cart_items",JSON.stringify(arr))
    }
    else{
        alert ("Insufficient balance")
    }
    
}













getData()
