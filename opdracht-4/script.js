// Haal het Element "leeftijd" op uit het HTML document en sla dit op in de variable outputText
let outputText = document.getElementById("leeftijd");
// Vraag aan de gebruiker d.m.v functie prompt in welk jaar ben je geboren en sal dit op in de variable "geboortejaar"
let geboortejaar = prompt("wanneer ben je geboren pa");
// Maak de rekensom van het huidige jaar - de geboortejaar van de gebruiker, en sla dit op in de variable "leeftijd"
let leeftijd = 2026 - Number(geboortejaar);
// Pak het element outputText en voeg text + leeftijd toe aan deze variable  
outputText.innerHTML = "Je bent ongeveer " + leeftijd + " jaar oud.";
// log in browser
console.log(leeftijd);