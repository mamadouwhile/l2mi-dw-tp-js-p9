function createSimpleNode(tag, options={}, text=""){
     let element = document.createElement(tag);

     for(key in options){
        element.setAttribute(key,options[key]);
     }

     if(text){
        element.textContent = text;
     }
     return element;
}

let img = createSimpleNode("img", { src: "pix.png", alt: "drapeau" });
let link = createSimpleNode("a", { href: "https://google.com" }, "Un site");
let para = createSimpleNode("p", {}, "Du texte");

document.body.append(img);
document.body.append(link);
document.body.append(para);
