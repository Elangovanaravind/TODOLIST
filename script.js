var inputtext=document.querySelector(".insertbar")
var container=document.querySelector(".container")
button.addEventListener("click",function (){
    var insert=document.createElement("div")
    insert.setAttribute("class","inner-container")
    insert.innerHTML=`<h1>${inputtext.value}</h1>`+'<button class="del" onclick="del(event)">X</button>'+'<button class="cor" onclick="cor(event)"><i class="fa-regular fa-circle-check"></i></button>'
    container.append(insert)
    inputtext.value=" "
}
)
var button1 = document.querySelector(".cor")
function cor(event){
    event.target.style.backgroundColor = "white"
    event.target.style.color="darkgreen"
    //cor.style.backgroundColor = "green"
    
}


function del(event){
    event.target.parentElement.remove()
}
