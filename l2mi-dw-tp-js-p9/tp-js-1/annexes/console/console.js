const x = "15";
console.log("Valeur initiale de x:", x);

let y = prompt("Saisir une valeur", x);

if (y === null) {
    console.log("L'utilisateur a annulé l'invite.");
    alert("Vous avez annulé !");
} else {
    console.log("Valeur saisie :", y);
    console.log("Type de la valeur saisie :", typeof y);
    alert("Valeur entrée : " + y + "\nType : " + typeof y);
}
