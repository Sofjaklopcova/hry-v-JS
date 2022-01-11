function randnum(min, max){
    return Match.floor(Math.random() * (max - min) + min)
}

function setCards(){
    firstCard.innerText = randomNumber(1, 9)
    secondCard.innerText = randomNumber(1, 9)
}

firstCard.onclick = () => {
    const firstNum = Number(firstCard.innerText)
    const secondNum = Number(secondCard.innerText)
    
    if(firstNum > secondNum) {
        firstCard.classList.add('success')
    }else firstCard.classList.add('danger')

    setTimeout(() =>)

    
}

secondCard.onclick = () => {
    const firstNum = Number(firstCard.innerText)
    const secondNum = Number(secondCard.innerText)
    
    if(firstNum > secondNum) {
        secondCard.classList.add('danger')
    }else
        secondCard.classList.add('suces')
    
}
setCards.onclick = () =>{

}
setCards()
