let placename=document.getElementById("placename");
let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    if(placename.value==""){
        alert("Fill the form")
    }else{
        alert(placename.value+"Tour is booked")
    }
})

let v2=document.getElementById("v2");
let connect=document.getElementById("connect");
connect.addEventListener("click",function(){
    if(v2.value==""){
        alert("Fill the form")
    }else{
        alert("Now we are connected")
    }
})

let amount=document.getElementById("amount");
let pay=document.getElementById("pay");
pay.addEventListener("click",function(){
    if(amount.value==""){
        alert("Fill the form")
    }else{
        alert("")
    }
})



