//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo ///nome e comunicagli se può partecipare o no alla festa.

//lista nomi

var listanomi = ["Polina" , "Martello" , "Melchiorre" , "Monello"];

console.log(listanomi);

//Chiedo nome
var nome = prompt ("Egregio individuo mi dica il suo nome ");

console.log(nome);

var trovato = false

//Comunico se può partecipare
for (var i = 0; i < listanomi.lenght && trovato === false; i++ )
{
  console.log(i);
  if (nome === listanomi[i])
  {
    trovato = true;
    console.log(nome, listanomi[i], trovato);
  }
}
console.log(trovato ? "entri pure" : "lei non può entrare");
