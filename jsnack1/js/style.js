//L’utente inserisce due numeri in successione
//con due prompt. Il software stampa il maggiore.

//chiedo primo numero
var numero1 = parseInt(prompt("inserisci primo numero"));
//chiedo secondo numero
var numero2 = parseInt(prompt("inserisci secondo numero"));
//stampo il maggiore
if (numero1 > numero2){
  document.getElementById('maggiore').innerHTML ="il numero maggiore è " + numero1;
} else if (numero1 < numero2) {
  document.getElementById('maggiore').innerHTML ="il numero maggiore è " + numero2;
  }
