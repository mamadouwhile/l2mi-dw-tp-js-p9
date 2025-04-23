# Documentation Express : Tableaux en JavaScript

## 1. Création de base
```js
let vide = []; // Tableau vide
let nombres = [1, 2, 3];
let chaines = ["JS", "est", "cool"];
let mixtes = [42, "text", true, null];
```

## 2. Accès et modification
```js
let a = [10, 20, 30];
a[0] = 100;           // Modification
console.log(a[1]);    // Affiche 20
```

## 3. Parcours
```js
let fruits = ["pomme", "banane", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));
```

## 4. Ajout et suppression
```js
let arr = [1, 2];
arr.push(3);        // Ajoute en fin
arr.unshift(0);     // Ajoute au début
arr.pop();          // Retire dernier
arr.shift();        // Retire premier
```

## 5. Recherche
```js
let notes = [12, 15, 9];
notes.includes(15);        // true
notes.indexOf(9);          // 2
```

## 6. Copie et transformation
```js
let original = [1, 2, 3];
let copie = original.slice();        // Copie
let double = original.map(n => n*2); // Transformation
```

## 7. Filtres et conditions
```js
let valeurs = [1, 2, 3, 4, 5];
let pairs = valeurs.filter(n => n % 2 === 0);
let grandQue3 = valeurs.filter(n => n > 3);
```

## 8. Tri et réduction
```js
let nombres = [4, 1, 5];
nombres.sort((a, b) => a - b);        // Tri croissant

let somme = nombres.reduce((acc, val) => acc + val, 0);
```

## 9. Tableaux d'objets
```js
let users = [
  { nom: "Ali", age: 25 },
  { nom: "Sara", age: 30 }
];

let noms = users.map(u => u.nom);
let majeurs = users.filter(u => u.age >= 18);
```

## 10. Tableaux multidimensionnels
```js
let matrice = [
  [1, 2],
  [3, 4]
];
console.log(matrice[1][0]); // 3
```

## 11. Tableaux typés (Typed Arrays)
```js
let bytes = new Uint8Array([1, 2, 3]);
```

## 12. Cas spéciaux :
- Créer un tableau vide de 5 cases : `Array(5)`
- Le remplir : `Array(5).fill(0)`
- Transformer une string : `Array.from("JS") // ["J", "S"]`

## 13. Dédupliquer un tableau
```js
let items = ["a", "b", "a"];
let unique = items.filter((item, index, self) => self.indexOf(item) === index);
```

---

## Tips utiles
- `length` donne la taille.
- `sort()` trie par défaut comme du texte !
- `Array.isArray(val)` permet de tester si c'est un tableau.


🟩 Array.prototype.map()
🔧 Transformer chaque élément → nouveau tableau
📥 Paramètre : (element, index, array)
📤 Retourne : un nouveau tableau de même taille

js
Copier
Modifier
let tab = [1, 2, 3];
let doubled = tab.map(x => x * 2);
console.log(doubled); // 👉 [2, 4, 6]
🟨 Array.prototype.filter()
🔧 Filtrer les éléments selon une condition
📥 Paramètre : (element, index, array)
📤 Retourne : un nouveau tableau avec les éléments validés

js
Copier
Modifier
let tab = [1, 5, 8];
let grand = tab.filter(x => x > 4);
console.log(grand); // 👉 [5, 8]
🟦 Array.prototype.find()
🔧 Trouver le premier élément qui valide une condition
📥 Paramètre : (element, index, array)
📤 Retourne : l’élément (ou undefined s’il n’y en a pas)

js
Copier
Modifier
let tab = [3, 6, 9];
let premierPair = tab.find(x => x % 2 === 0);
console.log(premierPair); // 👉 6
🟥 Array.prototype.includes()
🔧 Savoir si un élément est présent dans un tableau
📥 Paramètre : valeur, [fromIndex]
📤 Retourne : un booléen (true ou false)

js
Copier
Modifier
let fruits = ["pomme", "poire"];
console.log(fruits.includes("pomme")); // 👉 true
console.log(fruits.includes("banane")); // 👉 false
🟪 Array.prototype.some()
🔧 Vérifie si au moins un élément satisfait une condition
📥 Paramètre : (element, index, array)
📤 Retourne : un booléen

js
Copier
Modifier
let tab = [1, 3, 5];
console.log(tab.some(x => x % 2 === 0)); // 👉 false
🟫 Array.prototype.every()
🔧 Vérifie si tous les éléments satisfont une condition
📥 Paramètre : (element, index, array)
📤 Retourne : un booléen

js
Copier
Modifier
let tab = [2, 4, 6];
console.log(tab.every(x => x % 2 === 0)); // 👉 true
🧮 Array.prototype.reduce()
🔧 Accumuler une valeur (ex : somme, produit, moyenne…)
📥 Paramètre : (accumulateur, valeurCourante, index, array)
📤 Retourne : un seul résultat (ex : nombre)

js
Copier
Modifier
let notes = [10, 15, 20];
let somme = notes.reduce((acc, val) => acc + val, 0);
console.log(somme); // 👉 45
🔄 Array.prototype.forEach()
🔧 Pour parcourir un tableau sans retourner de valeur
📥 Paramètre : (element, index, array)
📤 Retourne : rien (undefined)

js
Copier
Modifier
let couleurs = ["bleu", "vert"];
couleurs.forEach((c, i) => console.log(i + " => " + c));
// 👉 0 => bleu
// 👉 1 => vert
📦 Object.keys() / values() / entries()
Object.keys(obj)
📤 Tableau des clés d’un objet

js
Copier
Modifier
let obj = { nom: "Ali", age: 22 };
console.log(Object.keys(obj)); // 👉 ["nom", "age"]
Object.values(obj)
📤 Tableau des valeurs

js
Copier
Modifier
console.log(Object.values(obj)); // 👉 ["Ali", 22]
Object.entries(obj)
📤 Tableau de [clé, valeur]

js
Copier
Modifier
console.log(Object.entries(obj)); 
// 👉 [["nom", "Ali"], ["age", 22]]
🧠 Mémo rapide : Quelle méthode choisir ?

🔎 Besoin	🛠️ Méthode
Transformer un tableau	.map()
Filtrer selon une condition	.filter()
Trouver un élément précis	.find()
Savoir si un élément existe	.includes()
Vérifier si un élément respecte une condition (1 seul)	.some()
Vérifier si tous les éléments respectent une règle	.every()
Additionner ou transformer en une seule valeur	.reduce()
Juste parcourir	.forEach()
Travailler sur un objet (clés, valeurs, paires)	Object.keys() / values() / entries()
💡 Astuce examen : Si ta réponse commence par « Je veux parcourir... », pense à .forEach()
Si c’est « Je veux obtenir un nouveau tableau... », pense à .map() ou .filter()
Si c’est « Je veux extraire une seule valeur… », pense à .reduce() ou .find()

