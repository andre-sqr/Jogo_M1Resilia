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