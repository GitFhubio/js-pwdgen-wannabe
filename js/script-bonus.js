// alert('elleh');
//
// var nome = prompt('Ciao,benvenuto su questo fantastico sito.Come ti chiami?');
// console.log('Il tizio si chiama: ' + nome);
// var outputContainer = document.getElementById('output');
// var cognome = prompt(' Ciao ' + nome + ',che bello averti qui con noi. Di cognome come è che fai?');
// console.log('Il cognome del tizio è: ' + cognome);
// var colorepreferito = prompt(cognome+'? Ma che razza di cognome è lol.Vabe\',forse ti sembrerà inopportuna la domanda,ma quale è il tuo colore preferito?');
// alert('Ma sei un pazzo furioso caro '+ nome +'...Ti ho generato una password supersicura nel dom corri a leggerla,ciao!');
// var annoCorrente = new Date().getFullYear();
// outputContainer.innerText='La password generata è';
// outputContainer.append('\n'+nome+cognome+colorepreferito+annoCorrente);
//
// outputContainer.innerHTML='La password generata è <br>';
// outputContainer.append(nome+cognome+colorepreferito+annoCorrente);
//
//
//
// var prova= document.getElementsByClassName('prova')[0];
// console.log('prova');
// if(cognome === 'Guida' ){
// prova.innerText='Qualcosa mi dice che sei del Sud';
// }else if(cognome === 'Ruggeri' ){
// prova.innerText='Qualcosa mi dice che sei del Nord';}
// else
// {prova.innerText='Non ho la minima idea di dove tu sia e manco mi interessa';
// }


// giochiamo un pò a morra cinese



var morracinese= document.getElementById('morracinese');

var sceltagiocatore=prompt('Scegli tra sasso carta e forbici brutto bastardo');

while (sceltagiocatore != 'sasso' &&  sceltagiocatore != 'carta' && sceltagiocatore != 'forbici')
{
var sceltagiocatore=prompt('No allora non ci siamo capiti.Puoi scegliere solamente tra sasso carta e forbici');
}
var randomico = [
   "sasso",
   "carta",
   "forbice",
];
var sceltapc = Math.floor(Math.random()*randomico.length);

console.log(sceltapc);
if (sceltagiocatore === 'sasso' && sceltapc === 0 ) {morracinese.innerText='Pareggio';}
else if(sceltagiocatore ==='sasso' && sceltapc === 2){
  morracinese.innerText='Hai vinto';
} else if(sceltagiocatore ==='sasso' && sceltapc === 1)
{morracinese.innerText='Hai perso';}

if (sceltagiocatore === 'carta' && sceltapc === 0 )
 {morracinese.innerText='Hai vinto';}
else if(sceltagiocatore ==='carta' && sceltapc === 2){
  morracinese.innerText='Hai vinto';
} else if(sceltagiocatore ==='carta' && sceltapc === 1)
{morracinese.innerText='Pareggio';}

if (sceltagiocatore === 'forbici' && sceltapc === 0 )
 {morracinese.innerText='Hai perso';}
else if(sceltagiocatore ==='forbici' && sceltapc === 2){
  morracinese.innerText='Pareggio';
} else if(sceltagiocatore ==='forbici' && sceltapc === 1)
{morracinese.innerText='Hai vinto';}
