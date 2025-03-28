let liste = document.querySelector("ul");
let para = document.querySelector("p");

let newListe = document.createElement("ul");
let newP = document.createElement("p");
newP.textContent = para.textContent;

liste.querySelectorAll("li").forEach(li => {
    let newLi = document.createElement("li");
    newLi.textContent = li.textContent;
    newListe.appendChild(newLi);
});

let copieDiv = document.getElementById("output");
copieDiv.appendChild(newP);
copieDiv.appendChild(newListe);


