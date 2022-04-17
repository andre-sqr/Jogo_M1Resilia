// ESCOLHAS

function phaseChoiceOne() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) Avista um hotel para ficar e vai até ele
        B) Dorme na viela do bar
        C) Encontra uma senhorinha que te oferece uma cama`)
        
        if (answer.toLowerCase() === 'a') {
            location.href = 'sheriffGameOver101.html' 
            answer = a
            break
        } else if (answer.toLowerCase() === 'b') { 
            location.href = 'sheriffPhase2.html' 
            break      
        } else if (answer.toLowerCase() === 'c') {
            location.href = 'sheriffGameOver102.html'
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