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
var sceltagiocatore=prompt('Scegli tra sasso carta e forbice brutto bastardo');
var sceltacomputer='forbice';
var x = document.forms["giocatore"];
var y = document.forms["computer"];
if (sceltagiocatore === x.elements[0].value) {morracinese.innerText='Hai vinto il tuo pc è da buttare nel cesso.';}
else if(sceltagiocatore === x.elements[1].value){morracinese.innerText='Hai perso sei scarso ritirati fallito';
}else{morracinese.innerText='Pareggio';}
