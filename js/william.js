function phaseOneChoice() {
    while (answer != 'a' || 'b' || 'c') {
        var answer = prompt(`Qual a sua escolha?
        Digite a letra da opção desejada
        
        A) Sair pela viela de trás do comércio
        B) Fugir pela janela
        C) Fugir pela porta da frente`)
        
        if (answer.toLowerCase() === 'a') {
            alert('Um aprendiz de xerife estava dormindo na viela. Você acorda ele e é preso.')
            location.href = '../../index.html' 
            break
        } else if (answer.toLowerCase() === 'b') { 
            location.href = 'banditPhase2.html' 
            break      
        } else if (answer.toLowerCase() === 'c') {
            alert('Uma pessoa te vê com o saco de dinheiro e atira. Você morre na hora.')
            location.href = '../../index.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}