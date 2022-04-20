// ESCOLHAS

function makeChoice(text, rightAnswer, wrongAnswer1, alert1, wrongAnswer2, alert2, link) {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha? \n Digite a letra da opção desejada
        \n ${text}`)
        
        if (answer.toLowerCase() === wrongAnswer1) {
            alert(alert1)
            location.href = '../../index.html' 
            break
        } else if (answer.toLowerCase() === rightAnswer) { 
            location.href = link 
            break      
        } else if (answer.toLowerCase() === wrongAnswer2) {
            alert(alert2)
            location.href = '../../index.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}

function makeChoiceTwoLinks(text, rightAnswer, wrongAnswer1, gameoverlink, wrongAnswer2, link, message) {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha? \n Digite a letra da opção desejada
        \n ${text}`)
        
        if (answer.toLowerCase() === wrongAnswer1) {
            location.href = gameoverlink
            break
        } else if (answer.toLowerCase() === rightAnswer) { 
            location.href = link 
            break      
        } else if (answer.toLowerCase() === wrongAnswer2) {
            alert(message)
            location.href = '../../index.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}

// GAME OVER

function goBack() {
    location.href = '../../index.html'
}

function jamesKillsJohn() {
    alert(`Em um movimento súbito, James saca uma pistola que estava escondendo, pressiona contra sua cabeça e atira. Agora, finalmente, ele poderia continuar o caso que começou com a esposa de John, e atraí-lo até a cidade funcionou da forma como havia planejado. Você morre.`)
    location.href = '../../index.html'
}