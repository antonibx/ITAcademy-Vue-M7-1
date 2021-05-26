//Exercici 5
let nota_examen = parseInt(prompt("Quin nota has tret a l'examen?"));
let alerta="";
if (nota_examen >= 5) {
    alerta = "Molt bé, has aprovat amb un "+nota_examen+"!!";
} else {
    alerta = "Ohh has suspès l'examen amb un "+nota_examen;
}
alert(alerta);