var mailUtente = prompt("Digita la tua mail")
var mailValide = ["sestilialessandro@gmail.com" , "asestilz@gmail5.com" , "cocomeri@gmail.com" , "cani_volanti@gmail.com" , "sanguisughe-spruzzanti_inchiostro@yahoo.it"]

var mailExists = false

for (var i = 0; i < mailValide.length; i++) {

    if(mailValide[i] === mailUtente) {
        mailExists = true
        alert("La tua Mail è corretta. ")
    }
}

if(!mailExists) {
    alert("Inserisci una mail valida.")
}
