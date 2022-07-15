

let arr = JSON.parse(localStorage.getItem("cart_items"))
let total = 0
for (let i=0; i<arr.length; i++){
    total = total + arr[i].price
}

let cart_total = document.getElementById("cart_total")
cart_total.innerText=total


function appendData1(arr){
    let cart = document.getElementById("cart")
    cart.innerHTML=null

    arr.forEach(function(ele,ind) {
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
        button.setAttribute("class","remove")
        button.innerText="Remove"
        button.addEventListener("click",function(){
            Remove(ele,ind)
        })

        card.append(img,name,price,button)
        cart.append(card)
    });
}


appendData1(arr)




function Remove(ele,ind){
    arr.splice(ind,1)
    // for (let i=0; i<arr.length; i++){
    //     total = total + arr[i].price
    // }
    localStorage.setItem("cart_items",JSON.stringify(arr))
    
    cart_total.innerText=cart_total.innerText-ele.price
    appendData1(arr)
}