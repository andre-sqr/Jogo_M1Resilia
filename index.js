function characterChoice() {
    while (character != 'a' || 'b' || 'c') {
        var character = prompt(`Qual personagem você deseja escolher?
        Digite a letra da opção desejada
        
        A) John, o xerife
        B) William, o bandido
        C) Florence, a fundadora`)
        
        if (character.toLowerCase() === 'a') {
            alert('Você decidiu jogar com John, o xerife')
            location.href = './html/john/sheriffPhase1.html'
            break
        } else if (character.toLowerCase() === 'b') {
            alert('Você decidiu jogar com William, o bandido') 
            location.href = './html/william/banditPhase1.html' 
            break      
        } else if (character.toLowerCase() === 'c') {
            alert('Você decidiu jogar com Florence, a fundadora')
            location.href = './html/florence/civilianPhase1.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}