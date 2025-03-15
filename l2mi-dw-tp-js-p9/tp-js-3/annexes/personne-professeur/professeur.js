  function Professeur(nom, prenom, age, interets, matiere) {
    Personne.call(this, nom, prenom, age, interets); 
    this.matiere = matiere; 
}

Professeur.prototype = Object.create(Personne);

Professeur.prototype.enseigner = function(){
    alert("Bonjour,mon nom est M." + this.nom + " et j'enseigne les " + this.matiere)
}

let p2 = new Professeur("James", "Parrow", 40, ["lecture", "sport"], "Mathématiques");
p2.enseigner();
p2.salutation();
p2.bio();
