

output=document.getElementById("light")

var win = document.getElementById("win")

var loss = document.getElementById('los')

document.getElementById("num1").innerText=numpick()
document.getElementById("num2").innerText=numpick()
document.getElementById("op").innerText=oppick()

var x= Number(document.getElementById("num1").innerText)
var y= Number(document.getElementById("num2").innerText)

var opera = document.getElementById("op").innerText

switch(opera){
    case "+":
        answer = Number(x+y)
        break
    case "-":
        answer = Number(x-y)
        break
    case "*":
        answer = Number(x*y)
        break
    case "/":
        answer = Math.floor(Number(x/y))
        break
}

var answer = 0




function numpick(){
    let x = Math.floor(Math.random() * 100) + 1
    return x;
}

function oppick(){
    let x = Math.random()
    if(x<0.26){
        return "+"
    }
    else if(x<0.51){
        return "-"
    }
    else if(x<0.76){
        return "*"
    }
    else{
        return "/"
    }
}

function check(){
    document.getElementById("you").value=document.getElementById("myAns").value
    document.getElementById("pc").value=answer
    let x = Number(document.getElementById("you").value)
    let y = Number(document.getElementById("pc").value)
    if(x==y)
    {
        output.innerText="Win!"
        output.style.backgroundColor="#378527"
        let c = Number(win.value)
        c++
        win.value=c
    }
    else
    {
        output.innerText="Lose!"
        output.style.backgroundColor="#970f0f"
        let c = Number(loss.value)
        c++
        loss.value=c
    }
    document.getElementById("check").disabled=true;
}

document.getElementById("check").addEventListener("click", check)

function reset(){
    document.getElementById("check").disabled=false;
    document.getElementById("num1").innerText=numpick()
document.getElementById("num2").innerText=numpick()
document.getElementById("op").innerText=oppick()

let a= Number(document.getElementById("num1").innerText)
let b= Number(document.getElementById("num2").innerText)

let opera2 = document.getElementById("op").innerText

switch(opera2){
    case "+":
        answer = Number(a+b)
        break
    case "-":
        answer = Number(a-b)
        break
    case "*":
        answer = Number(a*b)
        break
    case "/":
        answer = Math.floor(Number(a/b))
        break
}

}




