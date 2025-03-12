
Dalton.prototype.nom = "Dalton"

Dalton.prototype.afficher = function() {
    console.log(this.nom + " " + this.prenom);
};

const daltons = [averell, jack, joe, william];

for (let x of daltons) {
    x.afficher();
}

daltons.map(dalton => dalton.afficher());

console.log(william.hasOwnProperty("nom"));

for(let key in william){
    console.log(key)
}
console.log("Avant suppression");

for(let dalton of daltons){
    for(let key in dalton){
        console.log(key)
    }   
}

delete Dalton.prototype.nom;
console.log("Après suppression");
for(let dalton of daltons){
    for(let key in dalton){
        console.log(key)
    }   
}
