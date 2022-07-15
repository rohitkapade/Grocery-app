

function orderPlaced(e){
    e.preventDefault()
// let name = document.getElementById("user_name")
// let num = document.getElementById("user_number")
// let add = document.getElementById("user_address")

// name.setAttribute("required")

    let i=0
    setInterval(function(){

        if (i==0){
            alert ("Your order is confirmed")
        }

        if (i==3){
            alert ("Your order is being Packed")
        }

        if (i==8){
            alert ("Your order is in transit")
        }

        if (i==10){
            alert ("Your order is out for delivery")
        }

        if(i==12){
            alert ("Order delivered")
        }

        i++
    },1000)

   
}