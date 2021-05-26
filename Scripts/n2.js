
function main() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultat = calculadora(operador,num1,num2);
    document.getElementById("modificable").innerHTML = resultat;
}

function calculadora(operador, valor1, valor2) {
    let resultat;
    switch(operador){
        case "+":
        case "suma":
            resultat = valor1+valor2;
            break;
        case "-":
        case "resta":
            resultat = valor1-valor2;
            break;
        case "*":
        case "multiplicacio":
            resultat = valor1*valor2;
            break;
        case "/":
        case "divisio":
            if (valor2 == 0) {
                resultat = "divisió per 0 no permesa";
            } else {
                resultat = valor1/valor2;
            }
            break;
        default:
            resultat="operació "+operador+" no permesa";
    }
    return resultat;
}
