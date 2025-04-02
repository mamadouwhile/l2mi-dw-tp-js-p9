// Question 1 : Coloration
document.body.style.backgroundColor = "black";
document.getElementById("intro").style.backgroundColor = "orange"
document.getElementById("sondage").style.backgroundColor = "red"
document.querySelectorAll("div").forEach(
    div => div.style.color = "#FFF"
)
// Question 2 : Centrer images de la div intro 
const intro = document.getElementById("intro")

intro.querySelectorAll("img").forEach(
    img => img.classList.add("center")
)

// Question 3 : Ajout indication sondage

const sondage = document.getElementById("sondage")

sondage.querySelectorAll("input[type='email']").forEach(
   
    email => email.value = "nom.prenom@univ-angers.fr"
    
)

sondage.querySelectorAll("input[type='radio'][value='non']").forEach(
    radio => radio.checked = true
)

sondage.querySelectorAll("input[type='radio'][value='oui']").forEach(
    radio => radio.querySelectorAll("label").forEach(
        label => label.textContent = "Yes"
    )
)


sondage.querySelectorAll("input[type='radio'][value='non']").forEach(
    radio => radio.querySelectorAll("label").forEach(
        label => label.textContent = "No"
    )
)


// Question 4 : Ajout d'une description textuelle aux images
function arborescence(node){
    let text =  node.tagName
    
    while(node.parentNode.tagName !== "BODY"){
        text +=" - " + node.parentNode.tagName +" ("+node.parentNode.id+")"
        node = node.parentNode
    }

    return text
}
document.querySelectorAll("img").forEach(
    img => img.alt = arborescence(img)
)
