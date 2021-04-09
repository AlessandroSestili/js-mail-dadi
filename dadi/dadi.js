// genera un numero da 1 a 6 
var numeroUtente = Math.floor(Math.random() * 7)
var numeroAI = Math.floor(Math.random() * 7)

// mostra nella console i numeri usciti 
console.log("Questo è il numero uscito per l'utente " + numeroUtente)
console.log("Questo è il numero della macchina " + numeroAI)

if(numeroAI > numeroUtente) {
    alert("Mi dispiace. Ha vinto la macchina. Riprova! ❌")
}else if(numeroUtente > numeroAI) {
    alert("Wow! Hai vinto! ✅")
}else {
    alert("C'è un pareggio! 😊")
}

