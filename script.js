const body=document.getElementById("body")
let flag=true
const btn1=document.getElementsByClassName('btn1')
console.log(btn1)
function handler(){
    if(flag){
    body.style.backgroundColor='black'
}
    else{
        body.style.backgroundColor='white'
    }
    flag=!flag
}
