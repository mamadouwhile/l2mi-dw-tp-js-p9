//Question1
let form = document.querySelector("form");
form.previousElementSibling.remove();
form.remove();

//Question2
document.querySelectorAll("table tr").forEach(e => {
    e.style.textAlign = "center";
});

//Question3
document.querySelectorAll("table td").forEach(e =>{
    e.style.border = "1px solid violet";
});

//Question4
let paragraphe = document.getElementById("intro");
paragraphe.nextElementSibling.style.display ="none";
paragraphe.style.display ="none";

//Question5
let liste1 = document.querySelector("ol");
liste1.querySelectorAll("li").forEach(li => {
    if (li.textContent.startsWith("D")) {
        li.style.fontFamily = "Cursive";
    } else {
        li.textContent = "\u26A0";
    }
});
