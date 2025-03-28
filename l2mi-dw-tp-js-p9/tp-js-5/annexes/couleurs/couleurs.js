
function genererTableauColor(table,couleurDebut, changementCouleur){

        for (let i = 0; i < 8; i++) {
            let ligne = document.createElement("tr");

            for (let j = 0; j < 8; j++){

                let colonne = document.createElement("td");

                colonne.style.width = "50px"
                colonne.style.height = "50px"


                let r = couleurDebut.r*i + changementCouleur.r *j;
                let g = couleurDebut.g*i + changementCouleur.g *j;
                let b = couleurDebut.b*(i+j) + changementCouleur.b *j;

                colonne.style.backgroundColor = "rgb("+r+","+g+","+b+")"
                //colonne.style.backgroundColor = "black"

                ligne.appendChild(colonne)

            }

            table.appendChild(ligne)
        }

    }

let table = document.querySelectorAll("table")
genererTableauColor(table[0],{r:250,g:0,b:0},{r:0,g:20,b:20})
genererTableauColor(table[0],{r:0,g:250,b:0},{r:0,g:20,b:20})
genererTableauColor(table[0],{r:0,g:0,b:250},{r:0,g:20,b:20})

