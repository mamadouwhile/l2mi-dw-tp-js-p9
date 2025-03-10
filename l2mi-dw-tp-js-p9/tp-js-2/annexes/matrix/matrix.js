function sMatrix(matrix) {
    let resultat = "";

    matrix.forEach(ligne => {
        ligne.forEach(nombre =>{
            resultat += nombre + " ";
        })
        resultat += "\n";
    });

    return resultat;
}


