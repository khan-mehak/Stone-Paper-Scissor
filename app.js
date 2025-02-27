let userscore = 0
let compscore = 0

let ch = document.querySelectorAll(".ch")
let msg=document.querySelector("#msg")


const usersc=document.querySelector("#userscore")
const compsc=document.querySelector("#compscore")

const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was draw"
    msg.style.backgroundColor="gray"
}

const showWinner=(userwin,user,comp)=>{
  if(userwin){
    userscore++
    usersc.innerText=userscore
    console.log("user win")
    msg.innerText=`You win 🙌 ${user} beats ${comp} `
    msg.style.backgroundColor="green"
  }
  else{
    compscore++
    compsc.innerText=compscore
    console.log("you loose")
    msg.innerText=`You loose 🥹 ${comp} beats your ${user}`
    msg.style.backgroundColor="red"
  }
}



const genCompChoice = () => {
    const op = ["stone", "paper", "scissor"]
    let randIdx = Math.floor(Math.random() * 3)
    return op[randIdx]
}


const playGame = (user) => {
    console.log("user choice ", user)
    // generate computer choice 
    const comp = genCompChoice()
    console.log("Computer choice : ", comp)

    if(user==comp){
        drawGame()
    }

    else{
        let userwin=true
        if(user==="stone"){
            //scissors,paper
            userwin=comp==="paper"?false:true
        }
        else if(user==="paper"){
           //rock scissors
           userwin= comp==="scissor"?false:true
        }
        else{
            userwin=comp==="rock" ? false:true
        }

        showWinner(userwin,user,comp)
    }

}


ch.forEach((ch) => {
    console.log(ch)
    ch.addEventListener("click", () => {
        const user = ch.getAttribute("id")
        console.log("choice was clicked", user)
        playGame(user)
    })
})