// Question 1
// Ajout de la ligne d'en-têtes (horaires) au tableau HTML et suppression de la liste
let table = document.querySelector("table")
let tr = document.createElement("tr")

let liste = document.querySelectorAll("#axes ul li")
liste.forEach(
        li =>{
            let th = document.createElement("td")
            th.textContent = li.textContent
            tr.appendChild(th)
        }
    )
table.insertBefore(tr, table.firstElementChild);
let div =  document.querySelector("#axes").remove()

// Question 2
// Configuration des labels
var t_labels = [ "Neutre", "Interdit", "A éviter", "Préféré"];
var c_labels = [ "white", "red", "orange", "green"];

document.querySelectorAll("fieldset label")
        .forEach((label,index) => {
            label.textContent = t_labels[index]
            label.style.backgroundColor = c_labels[index]
        })
// Question 3
// Configuration des boutons radio
document.querySelectorAll("fieldset input[type='radio']")
        .forEach((input,index) => {
            input.name = "preference"
            input.value = c_labels[index]
        })
// Question 4
// Ajout du bouton de soumission
let submit = document.createElement("input");
submit.type = "submit";
submit.name = "ok"
submit.value = "OK"
document.querySelector("fieldset").appendChild(submit)

// Question 5
// Ajout de l'élément `form`
let form = document.createElement("form")
let fieldset = document.querySelector("fieldset").cloneNode(true)
form.appendChild(fieldset)
document.body.appendChild(form)
