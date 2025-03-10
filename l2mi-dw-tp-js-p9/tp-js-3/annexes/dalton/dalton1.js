
function Dalton(prenom) {
    this.prenom = prenom;
}

let averell = new Dalton("Averell");

function log(dalton) {
    console.log(`Voici le prénom : ${dalton.prenom}`);
}

log(averell); 

let jack = Object.create(Dalton.prototype);
jack.prenom = "Jack";
log(jack);

let joe = Object.create({ prenom: "Joe" });
//Object.setPrototypeOf(joe, Dalton.prototype); 
log(joe);

let william = JSON.parse('{"prenom":"William"}');
//Object.setPrototypeOf(william, Dalton.prototype); 
log(william);

// { ’prénom’ : ’William’ }", ’{ "prénom" : William }’ et ’{ "prénom" : "William", }’ ne sont pas des chaînes au format JSON

/*console.log(Dalton.prototype);
console.log(Object.getPrototypeOf(averell));
console.log(Object.getPrototypeOf(jack));
console.log(Object.getPrototypeOf(joe));
console.log(Object.getPrototypeOf(william));*/

console.log((Dalton.prototype) === Object.getPrototypeOf(averell))
console.log((Dalton.prototype) === Object.getPrototypeOf(jack))
console.log((Dalton.prototype) === Object.getPrototypeOf(joe))
console.log((Dalton.prototype) === Object.getPrototypeOf(william))

console.log(william.hasOwnProperty("prenom")); 
console.log(Object.getOwnPropertyNames(william));
console.log(Object.keys(william));

for (let key in william) {
    console.log(key);
}

