// Q1 - Créez un tableau JS qui stocke chaque triplet d'entiers figurant dans une ligne du tableau HTML sous la forme d'un tableau JS à 3 éléments.
// Ce tableau ne doit contenir ni les en-têtes, ni les noms de continents.
// Tableau attendu : [[48,3,5],[0,0,1],[31,12,6],[29,10,6],[13,10,14],[7,7,14],[12,0,2]]

let tableau = []
document.querySelectorAll("table tbody tr")
    .forEach(
    row => {
        let tds = row.querySelectorAll("td:not(:first-child)")
        let values = []
        tds.forEach(td => {
            values.push(parseInt(td.textContent));
        })
        tableau.push(values)
    }                    
    )
console.table(tableau)              

// Q2 Créez un tableau JS qui stocke chaque ligne du tableau HTML, sauf la ligne d'en-têtes, sous la forme d'un objet

let tableau2 = []
document.querySelectorAll("table tbody tr")
    .forEach(row => {
        let td = row.querySelectorAll("td")
        tableau2.push({
            continent : td[0].textContent.trim(),
            republic : parseInt(td[1].textContent.trim()),
            monarchy : parseInt(td[2].textContent.trim()),
            other : parseInt(td[3].textContent.trim())
        })
    });
console.log(tableau2)

// ayant 4 propriétés dénommées continent, republic, monarchy et other.
// Tableau attendu :
// [
// {
// "continent": "Africa",
// "republic": 48,
// "monarchy": 3,
// "other": 5
// },
// {
// "continent": "Antarctica",
// "republic": 0,
// "monarchy": 0,
// "other": 1
// },
// {
// "continent": "Asia",
// "republic": 31,
// "monarchy": 12,
// "other": 6
// },
// {
// "continent": "Europe",
// "republic": 29,
// "monarchy": 10,
// "other": 6
// },
// {
// "continent": "North America",
// "republic": 13,
// "monarchy": 10,
// "other": 14
// },
// {
// "continent": "Oceania",
// "republic": 7,
// "monarchy": 7,
// "other": 14
// },
// {
// "continent": "South America",
// "republic": 12,
// "monarchy": 0,
// "other": 2
// }
// ]

// Q3 - Fonction effacerFormattage() 
// Applique à toute cellule du tableau HTML contenant un entier la mise en forme suivante : 
// son fond est blanc, le texte est en noir, et la graisse (weight) des chiffres est normale.
function effacerFormattage(){
    document.querySelectorAll("table tbody tr")
    .forEach(
        row =>{
        let tds = row.querySelectorAll("td")
            .forEach(
                td => {
                    let val = td.textContent.trim()
                    if (!isNaN(val) ){
                        td.style.color = "black";
                        td.style.backgroundColor = "white";
                        td.style.fontWeight = "normal";
                    }
                }
                )
        }     
    )
}

// Q4 - Fonction formaterMinMax(ncol) 
// Prend en entrée un numéro de colonne du tableau HTML (ncol) et applique aux 2 cellules contenant les valeurs minimale et maximale de la colonne la mise en forme suivante :
// - le texte est en gras,
// - le texte est de couleur rouge pour la valeur minimale et vert clair pour la valeur maximale,
// - le fond est de couleur rose pour la valeur minimale et vert pour la valeur maximale.

function formaterMinMax(ncol) {

    let valeurs = [];
    document.querySelectorAll("table tbody tr")
        .forEach(row => {
            let td = row.querySelectorAll("td")[ncol];
            let val = parseInt(td.textContent.trim());
            if (!isNaN(val)) {
                valeurs.push(val);
            }
        });

    let min = Math.min(...valeurs);
    let max = Math.max(...valeurs);

    document.querySelectorAll("table tbody tr")
        .forEach(row => {
            let td = row.querySelectorAll("td")[ncol];
            let val = parseInt(td.textContent.trim());
            if (val === min) {
                td.style.color = "red";
                td.style.backgroundColor = "pink";
                td.style.fontWeight = "bold";
            } else if (val === max) {
                td.style.color = "#90EE90";
                td.style.backgroundColor = "green";
                td.style.fontWeight = "bold";
            }
        });
}


formaterMinMax(2)
// Q5 - Remplacez le texte des en-têtes du tableau HTML ``Republic'', ``Monarchy'' et ``Other'' par des boutons (éléments 
// button ou input de type button). Chaque bouton affiche le même texte que l’en-tête qu'il remplace.
document.querySelectorAll("table thead tr th:not(:first-child)")
    .forEach(col => {
        let button = document.createElement("button");
        button.textContent = col.textContent.trim()
        col.textContent = ""
        col.appendChild(button) 
        
    });

    
// A COMPLETER

document.querySelectorAll("table thead tr th")
.forEach(function(header,index) {
    if (index > 0) 
    {
        btn = header.firstElementChild;
        btn.addEventListener("click", function(event) {
            effacerFormattage();
            formaterMinMax(index);
        });
    }
})
