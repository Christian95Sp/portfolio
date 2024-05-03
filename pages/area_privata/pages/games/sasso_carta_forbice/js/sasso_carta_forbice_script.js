const container = document.getElementById("container");
const risultato = document.getElementById("risultato");

alert("ciao! ti va di fare qualche partita?");
//variabili gioco
//const tentativi = 3;
let giocatore;
let computer;
let puntiComputer = 0;
let puntiGiocatore = 0;

let sceltaUtente;
let nomeGiocatore = window.prompt("Ciao inserisci il tuo nome: ");
document.getElementById("informazioni").innerHTML = "Benvenuto " + nomeGiocatore + "!";

document.getElementById("informazioni").style.display = "";

//nome giocatore sotto segni s-c-f
document.getElementById("giocatore").innerHTML = nomeGiocatore + ": ";
document.getElementById("computer").innerHTML = "Computer: ";

//scelta iniziale del gioco (tasti visibili)
document.getElementById("gioco-standard").style.display = "";
document.getElementById("gioco-espansione-ls").style.display = "";

//tasti invisibili
document.getElementById("titolo").style.display = "none";
document.getElementById("carta").style.display = "none";
document.getElementById("forbici").style.display = "none";
document.getElementById("sasso").style.display = "none";
document.getElementById("lizard").style.display = "none";
document.getElementById("spock").style.display = "none";
document.getElementById("giocatore").style.display = "";
document.getElementById("computer").style.display = "";

document.getElementById("pulsante").style.display = "none";
document.getElementById("pulsante-versione-ls").style.display = "none";

document.getElementById("termina-partita").style.display = "none";

//foreach + []

function sceltaSCF() {
  //tasti visibili solo per sasso carta forbice
  document.getElementById("informazioni").style.display = "";
  document.getElementById("carta").style.display = "";
  document.getElementById("forbici").style.display = "";
  document.getElementById("sasso").style.display = "";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("spock").style.display = "none";
  //pulsanti iniziali
  document.getElementById("gioco-standard").style.display = "none";
  document.getElementById("gioco-espansione-ls").style.display = "none";
  //pulsante gioco
  document.getElementById("pulsante").style.display = "";
  document.getElementById("pulsante-versione-ls").style.display = "none";
  document.getElementById("risultato-partita").style.display = "none";
}

function sceltaSCFLS() {
  //tasti visibili solo per espanzione lizard spock
  document.getElementById("informazioni").style.display = "";
  document.getElementById("carta").style.display = "";
  document.getElementById("forbici").style.display = "";
  document.getElementById("sasso").style.display = "";
  document.getElementById("lizard").style.display = "";
  document.getElementById("spock").style.display = "";
  //pulsanti iniziali
  document.getElementById("gioco-standard").style.display = "none";
  document.getElementById("gioco-espansione-ls").style.display = "none";
  //pulsante gioco
  document.getElementById("pulsante").style.display = "none";
  document.getElementById("pulsante-versione-ls").style.display = "";
  document.getElementById("risultato-partita").style.display = "none";
}

//seleziona segno
function cliccatoCarta() {
  sceltaUtente = "carta";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

function cliccatoForbici() {
  sceltaUtente = "forbice";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

function cliccatoSasso() {
  sceltaUtente = "sasso";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}
// aggiunta funzionamento tasto lizard
function cliccatoLizard() {
  sceltaUtente = "lizard";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}
// aggiunta funzionamento tasto spock 
function cliccatoSpock() {
  sceltaUtente = "spock";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

//versione SASSO CARTA FORBICE 
function verdettoStandard() {
  //scelta giocatore
  giocatore = sceltaUtente;
  console.log("Hai scelto: " + giocatore);

  const oggetti = ["sasso", "carta", "forbice"];

  //scelta computer casuale
  let sceltaComputer = Math.floor(Math.random() * oggetti.length);
  computer = oggetti[sceltaComputer];
  console.log("il computer ha scelto: " + computer);

  //mosse e risultato partita
  document.getElementById("giocatore").style.display = "";
  document.getElementById("computer").style.display = "";
  document.getElementById("risultato-partita").style.display = "";

  //partita
  if (computer == giocatore) {
    console.log('parità');
    document.getElementById("risultato-partita").innerHTML = "Pareggio";
    document.getElementById("risultato-partita").className = "yellow-text";
  } // SASSO CARTA FORBICE
  else if (
    // sasso
    (giocatore == 'sasso' && computer == 'forbice')
    // forbice
    || (giocatore == 'forbice' && computer == 'carta')
    // carta
    || (giocatore == 'carta' && computer == 'sasso')
  ) {
    console.log('Hai vinto');
    document.getElementById("risultato-partita").innerHTML = "Hai vinto";
    document.getElementById("risultato-partita").classList.remove("red-text", "yellow-text");
    document.getElementById("risultato-partita").classList.add("green-text");
    puntiGiocatore++;

  } else {
    console.log('Hai perso ');
    document.getElementById("risultato-partita").innerHTML = "Hai perso";
    document.getElementById("risultato-partita").classList.remove("yellow-text", "green-text");
    document.getElementById("risultato-partita").classList.add("red-text");
    puntiComputer++;
  }
  document.getElementById("giocatore").innerHTML = nomeGiocatore + ": " + giocatore;
  document.getElementById("computer").innerHTML = "Computer: " + computer;

  console.log('pnt pc: ' + puntiComputer);
  console.log('pnt giocatore: ' + puntiGiocatore);

  document.getElementById("segnapunti-giocatore").innerHTML = nomeGiocatore + ": " + puntiGiocatore;
  document.getElementById("segnapunti-computer").innerHTML = "Computer: " + puntiComputer;

  document.getElementById("informazioni").innerHTML = "Vuoi giocare ancora?? Scegli"

  document.getElementById("termina-partita").style.display = "";
}

//versione SASSO CARTA FORBICE LIZARD e SPOCK
function verdettoEspansione() {
  // for (var i = 0; i < tentativi; i++) {
  const oggetti = ["sasso", "carta", "forbice", "lizard", "spock"];
  //scelta giocatore
  giocatore = sceltaUtente;
  console.log("Hai scelto: " + giocatore);

  //scelta computer casuale
  let sceltaComputer = Math.floor(Math.random() * oggetti.length);
  computer = oggetti[sceltaComputer];
  console.log("il computer ha scelto: " + computer);

  //mosse e risultato partita
  document.getElementById("giocatore").style.display = "";
  document.getElementById("computer").style.display = "";
  document.getElementById("risultato-partita").style.display = "";

  //partita
  if (computer == giocatore) {
    console.log('parità');
    document.getElementById("risultato-partita").innerHTML = "Pareggio";
    document.getElementById("risultato-partita").classList.remove("red-text", "green-text");
    document.getElementById("risultato-partita").classList.add("yellow-text");
  } // SASSO CARTA FORBICE LIZARD e SPOCK
  else if (
    // sasso
    (giocatore == 'sasso' && computer == 'forbice')
    || (giocatore == 'sasso' && computer == 'lucertola')
    // forbice
    || (giocatore == 'forbice' && computer == 'carta')
    || (giocatore == 'forbice' && computer == 'lucertola')
    // carta
    || (giocatore == 'carta' && computer == 'sasso')
    || (giocatore == 'carta' && computer == 'spock')
    // lizard
    || (giocatore == 'lizard' && computer == 'carta')
    || (giocatore == 'lizard' && computer == 'spock')
    // spock
    || (giocatore == 'spock' && computer == 'forbice')
    || (giocatore == 'spock' && computer == 'sasso')

  ) {
    console.log('Hai vinto');
    document.getElementById("risultato-partita").innerHTML = "Hai vinto";
    document.getElementById("risultato-partita").classList.remove("red-text", "yellow-text");
    document.getElementById("risultato-partita").classList.add("green-text");
    puntiGiocatore++;

  } else {
    console.log('Hai perso ');
    document.getElementById("risultato-partita").innerHTML = "Hai perso";
    document.getElementById("risultato-partita").classList.remove("yellow-text", "green-text");
    document.getElementById("risultato-partita").classList.add("red-text");
    puntiComputer++;
  }
  // }
  //document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + computer + ". Tu, hai scelto " + giocatore;
  document.getElementById("giocatore").innerHTML = nomeGiocatore + ": " + giocatore;
  document.getElementById("computer").innerHTML = "Computer: " + computer;

  console.log('pnt pc: ' + puntiComputer);
  console.log('pnt giocatore: ' + puntiGiocatore);

  document.getElementById("segnapunti-giocatore").innerHTML = nomeGiocatore + ": " + puntiGiocatore;
  document.getElementById("segnapunti-computer").innerHTML = "Computer: " + puntiComputer;

  document.getElementById("informazioni").innerHTML = "Vuoi giocare ancora?? Scegli"

  document.getElementById("termina-partita").style.display = "";
}

function ritornoAlMenu() {
  //scelta iniziale del gioco (tasti visibili)
  document.getElementById("gioco-standard").style.display = "";
  document.getElementById("gioco-espansione-ls").style.display = "";

  //tasti invisibili
  document.getElementById("titolo").style.display = "none";
  document.getElementById("informazioni").style.display = "";
  document.getElementById("informazioni").innerHTML = "Scegli la modalità";
  document.getElementById("carta").style.display = "none";
  document.getElementById("forbici").style.display = "none";
  document.getElementById("sasso").style.display = "none";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("spock").style.display = "none";
  document.getElementById("giocatore").style.display = "none";
  document.getElementById("computer").style.display = "none";

  document.getElementById("pulsante").style.display = "none";
  document.getElementById("pulsante-versione-ls").style.display = "none";
  document.getElementById("termina-partita").style.display = "none";

  if (puntiGiocatore == puntiComputer) {
    document.getElementById("risultato-partita").innerHTML = "Pareggio";
    document.getElementById("risultato-partita").classList.remove("red-text", "green-text");
    document.getElementById("risultato-partita").classList.add("yellow-text");

  } else if (puntiGiocatore > puntiComputer) {
    document.getElementById("risultato-partita").innerHTML = "Hai vinto";
    document.getElementById("risultato-partita").classList.remove("red-text", "yellow-text");
    document.getElementById("risultato-partita").classList.add("green-text");

  } else {
    document.getElementById("risultato-partita").innerHTML = "Hai perso";
    document.getElementById("risultato-partita").classList.remove("yellow-text", "green-text");
    document.getElementById("risultato-partita").classList.add("red-text");
  }

  document.getElementById("risultato-partita").style.display = "";
}

/*  Sasso-Carta-Forbice-Lizard-Spock -> DESCRIZIONE REGOLE
Le forbici tagliano la carta
La carta avvolge il sasso
Il sasso schiaccia la lucertola
La lucertola avvelena Spock
Spock rompe le forbici
Le forbici decapitano la lucertola
La lucertola mangia la carta
La carta invalida Spock
Spock vaporizza il sasso
Il sasso rompe le forbici 
--------------TABELLA VITTORIE e SCONFITTE-------------
Gesto    || Vince              || Perde
Forbici  || Carta  - Lucertola || Sasso    - Spock
Carta    || Sasso  - Spock     || Forbici  - Lucertola
Sasso    || Forbici- Lucertola || Carta    - Spock
Lucertola|| Carta  - Spock     || Forbici  - Sasso
Spock    || Forbici- Sasso     || Carta    - Lucertola
*/

/* CARTA SASSO FORBICE NORMALE
--------------TABELLA------------------------
--------||-VITTORIA-||-SCONFITTA-||-PAREGGIO-----------
Forbici || Carta    || Sasso     || Forbici
Carta   || Sasso    || Forbici   || Carta
Sasso   || Forbici  || Carta     || Sasso
 */

/* parte inserita dentro repo challeng network/game
  {
    name: "My Game - Christian",
    gameUrl: "https://christian95sp.github.io/game_Chri/",
    codeUrl: "https://github.com/Christian95Sp/game_Chri"
  }
*/