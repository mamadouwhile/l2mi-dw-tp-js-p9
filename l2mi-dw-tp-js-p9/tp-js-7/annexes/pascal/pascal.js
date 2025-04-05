// Tableau

function creerTableau(N) {
	// Supprimer le tableau précédent s’il existe
    const div = document.querySelector("div");
    const oldTable = div.querySelector("table");
    if (oldTable) div.removeChild(oldTable);

    // Créer une nouvelle table HTML
    let table = document.createElement("table");
    let tab = []; // tableau des valeurs (triangle de Pascal)

    for (let i = 0; i < N; i++) {
        let tr = document.createElement("tr");
        tab[i] = []; // Initialisation de la ligne i

        for (let k = 0; k <= i; k++) {
            let val;

            // Cas des bords du triangle
            if (k === 0 || k === i) {
                val = 1;
            } else {
                val = tab[i - 1][k - 1] + tab[i - 1][k]; // Formule de Pascal
            }

            tab[i][k] = val;

            // Créer la cellule HTML
            let td = document.createElement("td");
            td.textContent = val;
            td.title = `C(${i}, ${k})`;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    div.appendChild(table);
}

// Listeners
window.addEventListener("load", function () {
	var input = document.querySelector("INPUT[type=number]");
	var N = parseInt(input.value);
	creerTableau(N + 1);
})

document.querySelector("INPUT[type=number]").addEventListener("change", function (e) {
	var N = parseInt(e.target.value);
	var div = document.querySelector("DIV");
	var table = div.querySelector("TABLE");
	div.removeChild(table);
	creerTableau(N + 1);

})
