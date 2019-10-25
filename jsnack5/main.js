//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.


//creo un array vuoto
var lista = [];

//Chiedo all'utente di inserire 6 volte un numero e se è dispari entrerà nell'array
for (i=0; i<6; i++) {
           numero = parseInt(prompt("Inserisci un numero:"));
           console.log(numero, "posizione: " + i);
           if (numero % 2 !== 0) {
               console.log("Numero dispari");
               lista.push(numero);
           }
       }
       console.log("I numeri dispari sono:", lista);
