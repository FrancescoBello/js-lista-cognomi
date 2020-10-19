

 var cognomi = ["Rossi", "Ferrari", "Costa", "Bernardi", "Esposito", "Greco", "Mancini", "Grassi" ];
 var cognome_utente = prompt(" Inserisci qui il tuo cognome ");
 cognomi.push(cognome_utente)
 cognomi.sort()
 console.log(cognomi);
 console.log("Il tuo cognome è " + cognome_utente);
console.log("Il tuo cognome si trova in posizione " + cognomi.indexOf(cognome_utente));
