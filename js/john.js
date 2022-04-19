// ESCOLHAS

function phaseOneChoice() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) Avista um hotel para ficar e vai até ele
        B) Dorme na viela do bar
        C) Encontra uma senhorinha que te oferece uma cama`)
        
        if (answer.toLowerCase() === 'a') {
            location.href = 'sheriffGameOver101.html' 
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

function phaseTwoChoice() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) Florence
        B) James
        C) Começar uma meditação e buscar as respostas em si mesmo`)
        
        if (answer.toLowerCase() === 'a') {
            location.href = 'sheriffPhase3.html' 
            break
        } else if (answer.toLowerCase() === 'b') { 
            location.href = 'sheriffGameOver201.html' 
            break      
        } else if (answer.toLowerCase() === 'c') {
            location.href = 'sheriffGameOver202.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}

function phaseThreeChoice() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) O hotel da cidade
        B) A ferrovia abandonada
        C) Uma casa abandonada nos limites da cidade`)
        
        if (answer.toLowerCase() === 'a') {
            alert('A gangue do saqueador da taverna te encurrala e te mata na recepção')
            location.href = '../../index.html' 
            break
        } else if (answer.toLowerCase() === 'b') { 
            alert('Não tem nada lá, mas um grupo de caçadores de recompensa te sequestram na hora de voltar para a cidade')
            location.href = '../../index.html' 
            break      
        } else if (answer.toLowerCase() === 'c') {
            location.href = 'sheriffPhase4.html'
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