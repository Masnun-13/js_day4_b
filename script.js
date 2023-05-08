var win = document.getElementById("win")

var loss = document.getElementById('los')

var output = document.getElementById("light")

var player = document.getElementById("you")
var playerpic = document.getElementById("playerpic")
var computer = document.getElementById("pc")
var pcpic = document.getElementById("pcpic")

function compick(){
    let x = Math.random()
    if(x<0.34){
        return "Rock"
    }
    else if(x<0.67){
        return "Scissors"
    }
    else{
        return "Paper"
    }
}

function rock(){
    let g = compick()
    player.value="Rock"
    playerpic.src="image/rock.png"
    if(g=="Rock")
    {
        computer.value="Rock"
        pcpic.src="image/rock.png"
        output.innerText="Tie!"
        output.style.backgroundColor="#8a7a1f"
    }
    else if(g=="Scissors")
    {
        computer.value="Scissors"
        pcpic.src="image/scissor.png"
        output.innerText="Win!"
        output.style.backgroundColor="#378527"
        let c = Number(win.value)
        c++
        win.value=c
    }
    else if(g=="Paper")
    {
        computer.value="Paper"
        pcpic.src="image/paper.png"
        output.innerText="Lose!"
        output.style.backgroundColor="#970f0f"
        let c = Number(loss.value)
        c++
        loss.value=c
    }
}

function scissor(){
    let g = compick()
    player.value="Scissors"
    playerpic.src="image/scissor.png"
    if(g=="Rock")
    {
        computer.value="Rock"
        pcpic.src="image/rock.png"
        output.innerText="Lose!"
        output.style.backgroundColor="#970f0f"
        let c = Number(loss.value)
        c++
        loss.value=c
    }
    else if(g=="Scissors")
    {
        computer.value="Scissors"
        pcpic.src="image/scissor.png"
        output.innerText="Tie!"
        output.style.backgroundColor="#8a7a1f"
    }
    else if(g=="Paper")
    {
        computer.value="Paper"
        pcpic.src="image/paper.png"
        output.innerText="Win!"
        output.style.backgroundColor="#378527"
        let c = Number(win.value)
        c++
        win.value=c
    }
}

function paper(){
    let g = compick()
    player.value="Paper"
    playerpic.src="image/paper.png"
    if(g=="Rock")
    {
        computer.value="Rock"
        pcpic.src="image/rock.png"
        output.innerText="Win!"
        output.style.backgroundColor="#378527"
        let c = Number(win.value)
        c++
        win.value=c
    }
    else if(g=="Scissors")
    {
        computer.value="Scissors"
        pcpic.src="image/scissor.png"
        output.innerText="Lose!"
        output.style.backgroundColor="#970f0f"
        let c = Number(loss.value)
        c++
        loss.value=c
    }
    else if(g=="Paper")
    {
        computer.value="Paper"
        pcpic.src="image/paper.png"
        output.innerText="Tie!"
        output.style.backgroundColor="#8a7a1f"
    }
}

