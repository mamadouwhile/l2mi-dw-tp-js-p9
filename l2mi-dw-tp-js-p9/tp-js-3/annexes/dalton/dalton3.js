function Famille(nom) {
    this.nom = nom; 
    this.membres = []; 
}

let Dalton2 = new Famille("Dalton");
Famille.prototype.ajouter = function(objet) {
    this.membres.push(objet.prenom);
};

Famille.prototype.ajouter(averell);
Famille.prototype.ajouter.call(DALTON, joe);

let newDalton = [joe,william];
newDalton.map(membre => Dalton2.ajouter(membre));

Famille.prototype.afficher = function() {
    console.log("Famille : " + this.nom);
    
    for (let x in this.membres) {
        console.log(this.membres[x]); 
    }
};

Dalton2.afficher();
