//Exercici 8
let resultat = calculadora("resta",40,20);
console.log(resultat);
function calculadora(operador, valor1, valor2) {
    let resultat;
    switch(operador){
        case "suma":
            resultat = valor1+valor2;
            break;
        case "resta":
            resultat = valor1-valor2;
            break;
        case "multiplicacio":
            resultat = valor1*valor2;
            break;
        default:
            resultat="operació "+operador+" no permesa"
    }
    return resultat;
}