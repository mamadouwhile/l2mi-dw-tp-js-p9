
Dalton.prototype.nom = "Dalton";

Dalton.prototype.afficher = function() {
    return this.nom + " " + this.prenom;
};

const daltons = [averell, jack, joe, william];

for (let x of daltons) {
    x.afficher();
}

daltons.map(dalton => dalton.afficher());

console.log(william.hasOwnProperty("nom")); 

for (let key in william) {
    console.log(key);
}

for (let dalton of daltons) {
    for (let key in dalton) {
        console.log(key);
    }
}


for (let dalton of daltons) {
    dalton.afficher(); 
}

delete Dalton.prototype.nom;

for (let dalton of daltons) {
    dalton.afficher(); 
}