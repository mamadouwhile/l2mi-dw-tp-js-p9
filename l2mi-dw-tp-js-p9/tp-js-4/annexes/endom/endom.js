// Q1
document.getElementById("FORM").textContent = "Nouveau texte";

// Q2
document.querySelector("table").style.width = "80%";

// Q3
document.querySelectorAll("dl dt").forEach(element => {
    element.style.backgroundColor = "lightcyan";
});

// Q4
document.querySelectorAll("li").forEach(element => {
    element.textContent = "Hello"
});

// Q5
document.querySelectorAll("table")[1].remove();

// Q6
document.querySelectorAll("table tr")[2].remove();

// Q7
document.querySelectorAll("table tr").forEach(row => row.deleteCell(1));

// Q8
document.querySelector("input[name='h_adr_rue']").value = "49000";

// Q9
document.querySelector("input[type='checkbox'][value='garage']").checked = "true";
document.querySelector("input[type='checkbox'][value='piscine']").checked = "true";
