const el = document.getElementById("button1");
const blok = document.getElementById("blok");
const test = document.getElementById("test");

console.log(test);
//Klikbaar maken met evenlistener
el.addEventListener("click", modifyText);

//Een functie (opslagbox voor code)
function modifyText()
{
    console.log("hij doet het :)");
    const newP = document.createElement("p");
    var content = document.createElement("img");
    content.src = "images/katfoto.png";
    newP.appendChild(content);

    blok.appendChild(newP);



}

//Een random waarde uit de array pakken en weergeven op de pagina en eventlog.
const array = ["apple", "banana", "cherry", "mango", "elderberry"];
const length = array.length;
const randomIndex = Math.floor(Math.random() * length);
const randomValue = array[randomIndex];
console.log(randomValue);
test.innerHTML = array[randomIndex];




