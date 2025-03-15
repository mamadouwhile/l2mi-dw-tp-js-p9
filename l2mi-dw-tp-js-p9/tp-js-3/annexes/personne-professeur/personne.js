function Personne(nom, prenom, age, centreInterets) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.centreInterets = centreInterets; 

    this.salutation = function() {
        alert("Bonjour, je m’appelle " + this.nom + " " + this.prenom);
    };

    this.bio = function() {
        alert("Nom : " + this.nom + "\nPrénom : " + this.prenom + "\nÂge : " + this.age + 
              "\nCentres d’intérêts : " + this.centreInterets);
    };
}

let p1 = new Personne("Dupont", "Jean", 30, ["lecture", "sport", "musique"]);

p1.salutation(); 
p1.bio(); 

console.log(Personne.prototype);

Personne.prototype.aurevoir = function(){
    alert(this.nom + " est sorti. Au revoir !")
}

p1.aurevoir();

console.log(Personne.prototype);
