

// PROGRAMAÇÃO IMPERATIVA - PASSO A PASSO

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondesDisplay = document.querySelector('.secondes')

let minutes


function countDown() {
    setTimeout(function(){
 
        let secondes =  Number(secondesDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        secondesDisplay.textContent = String(secondes -1).padStart(2, "0") //Para preencher um número a frente com 0
        
        if (minutes <= 0){
            
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            buttonSet.classList.remove('hide')
            buttonStop.classList.add('hide')
                return;
            }

        if( secondes <= 0 ){
            secondes = 60

        minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }

        countDown() //PARA RODAR A FUNÇÃO NOVAMENTE!!
    }, 1000)
}

buttonPlay.addEventListener("click", function(){

    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countDown()

})
buttonPause.addEventListener("click", function(){

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function() {

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})
buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function(){
    minutes = prompt("Quantos minutos?")
    minutesDisplay.textContent = String (minutes).padStart(2, "0")
})