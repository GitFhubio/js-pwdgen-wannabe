// var output=document.getElementById('output');
// output.innerText='ciao';
// output.append('\ncome stai?');
// var prova=document.getElementById('prova');
// prova.innerHTML='ciao <br>';
// prova.append('come stai?');

var x= document.forms["giocatore"]
var y = document.forms["pc"];

var scelte = [];
var i=0;
while(i < y.length){
  scelte.push(y.elements[i].value);
  i++;
}
var sceltapc = scelte[Math.floor(Math.random()*y.length)];
var buttons = x.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick=function(){
  if (this.value === sceltapc ) {
  alert('hai pareggiato');}
  else{alert('non so chi ha vinto');
  // vabbè non ti scimunire l'hai fatta l'impostazione,poi i controlli sono come nelle versioni precedenti
}
}
}
// console.log(typeof sceltapc);
// console.log(typeof x.elements[0].value);
