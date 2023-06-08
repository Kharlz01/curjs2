// Codigo 1

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// Resultado volviendolo funcion

function presentar(name, lastname, nickname){
    completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

presentar("Juan David","Castro Gallego","juandc");

// Codigo 2

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// Resultado volviendolo solo if

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Codigo 3

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// Replicar con while

// let i=0;

while (i<5){
    console.log("El valor de i es: " + i);
    i++
}

let i=10;

while (i>=2){
    console.log("El valor de i es: " + i);
    i--
}

// Mensaje de 2 + 2

let msj; let l=0;

while (l==0){
    if (msj==4){
        console.log("Felicidades!");
        l=1;
    }else{
        msj = prompt("¿Cuanto es 2+2?");
    }
}

let rpt = 0;

while (rpt!=4){
    let rpt2 = prompt("Cuanto es 2 + 2");
    rpt = rpt2;
}
console.log("Felicidades!");

// Array 1

let a = ["Hola","a","Todos"]

function imp1(a1){
    console.log(a1[0]);
}

imp1(a);

// Array 2

let b = ["Hola","a","Todos"];

function imp2(b1){
    for (let i=0;i<b1.length;i++){
        console.log(`${i+1}. ${b1[i]}`);
    }
}

imp2(b);

// Array 3

let c = {
    name: "Carlos",
    lastname: "Agudelo",
    age: 25
};

function imp3(c1){
    for (let k in c1) {
        console.log(`${k}: ${c1[k]}`);
    }
}

imp3(c);