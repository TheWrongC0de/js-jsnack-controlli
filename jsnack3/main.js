//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di //tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


//chiedo 5 volte di inserire numero
//var numero1 = parseInt(prompt ("Inserisci numero1"));
//var numero2 = parseInt(prompt ("Inserisci numero2"));
//var numero3 = parseInt(prompt ("Inserisci numero3"));
//var numero4 = parseInt(prompt ("Inserisci numero4"));
//var numero5 = parseInt(prompt ("Inserisci numero5"));

//var sommatotale = numero1 + numero2 + numero3 + numero4 + numero5;
//console.log(sommatotale);

//ciclo
var somma = 0;
for (var i = 0; i < 5 ; i++){
  var numero = parseInt(prompt("Inserisci numero"));
  console.log(numero);
   somma =somma + numero;
}
console.log(somma);
