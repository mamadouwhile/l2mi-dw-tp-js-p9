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

Tu peux tout stocker dans un tableau : objets, fonctions, autres tableaux, etc. JavaScript est super souple !

---

Prêt pour l'examen ? Tu peux t'entraîner en réécrivant les exemples ou en combinant map/filter/reduce sur un tableau d'objets pour maîtriser ça à fond !

