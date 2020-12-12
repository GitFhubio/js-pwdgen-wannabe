// codice lost
var array =new Array(4,8,15,16,23,42);
var scelta = prompt('Ciao.Sei Desmond?y/n')
if (scelta === 'y') {

var scelta = prompt('Ciao Desmond.Inserisci la corretta sequenza di numeri separati dalla virgola e premi invio');
var scelta = JSON.parse("[" + scelta + "]");
// così ottengo un array di numeri,
// oppure se all'inizio avevo definito un array di stringhe
// potevo usare .split
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

if (arraysEqual(array, scelta) === true) {
  alert('hai salvato il mondo,torna tra 108 minuti');
} else {alert('Nooo Desmond che cazzo hai fatto??!!');
}
} else{
alert('sparisci allora')
}
