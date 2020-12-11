// alert('elleh');

var nome = prompt('Ciao,benvenuto su questo fantastico sito.Come ti chiami?');
console.log('Il tizio si chiama: ' + nome);
var outputContainer = document.getElementById('output');
var cognome = prompt(' Ciao ' + nome + ',che bello averti qui con noi. Di cognome come è che fai?');
console.log('Il cognome del tizio è: ' + cognome);
var colorepreferito = prompt(cognome+'? Ma che razza di cognome è lol.Vabe\',forse ti sembrerà inopportuna la domanda,ma quale è il tuo colore preferito?');
alert('Ma sei un pazzo furioso caro '+ nome +'...Ti ho generato una password supersicura nel dom corri a leggerla,ciao!');
var annoCorrente = new Date().getFullYear();
outputContainer.innerText = nome+cognome+colorepreferito+annoCorrente;
