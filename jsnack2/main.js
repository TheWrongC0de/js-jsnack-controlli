//L’utente inserisce due parole in successione, con due prompt
//Il software stampa prima la parola più corta, poi la parola più lunga.


//inserisco i prompt
var parola1 = prompt("Inserisci prima parola")
var parola2 = prompt("Inserisci seconda parola")

if ( parola1.length > parola2.length) {
  console.log(  parola2 + " " + parola1);
}
else if (parola1.length < parola2.length){
  console.log( parola1 + " " + parola2 );
}
else{
  console.log("sono uguali");
}
