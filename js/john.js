// ESCOLHAS

function phaseOneChoice() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) Avista um hotel para ficar e vai até ele
        B) Dorme na viela do bar
        C) Encontra uma senhorinha que te oferece uma cama`)
        
        if (answer.toLowerCase() === 'a') {
            alert('GAME OVER - O hotel era controlado por uma gangue mafiosa da cidade. Olham o seu distintivo policial no momento que você chega. Te matam enquanto você dorme.')
            location.href = '../../index.html' 
            break
        } else if (answer.toLowerCase() === 'b') { 
            location.href = 'sheriffPhase2.html' 
            break      
        } else if (answer.toLowerCase() === 'c') {
            alert('GAME OVER - A senhorinha era um bandido disfarçado. Ele joga veneno no seu mingau e é insistente para que você coma de bom grado. Como John sempre acredita em senhorinhas, ele come e morre.')
            location.href = '../../index.html'
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
            alert('GAME OVER - John senta de pernas cruzadas e começa a contar mentalmente suas respirações e expirações, sentindo o peito encher e esvaziar de ar. A meditação sempre trouxe clareza para ele em momentos de confusão. No entanto, John se concentra de maneira tão intensa que alguns anos se passam antes dele abrir os olhos novamente.')
            location.href = '../../index.html'
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
            alert('GAME OVER - A gangue do saqueador da taverna te encurrala e te mata na recepção')
            location.href = '../../index.html' 
            break
        } else if (answer.toLowerCase() === 'b') { 
            alert('GAME OVER - Não tem nada lá, mas um grupo de caçadores de recompensa te sequestram na hora de voltar para a cidade')
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