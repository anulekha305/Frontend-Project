// let user =document.getElementById("i1");

//  user.addEventListener("click",()=>{
//  document.querySelector(".loginpage").classList.toggle(".active1");
// })

 
// // let btn=document.querySelector("#i1");
// // btn.addEventListener("click",()=>{
// //     console.log(".formpopup");
// // })
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

