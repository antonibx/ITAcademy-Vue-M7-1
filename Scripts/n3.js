//Variables globals
var primerNum = "";
var segonNum = "";
var operador = "";

//Listener per botons de la pantalla -> Si es fa per tota la 'window' reacciona quan cliques a qualsevol lloc
var botons = document.getElementsByClassName("btn");
for (let i = 0; i < botons.length; i++) {
    botons[i].addEventListener('click', Boton, false);
}
function Boton(e) {
    Calc(e.target.value);
}

//Listener per tecles del teclat
window.addEventListener("keydown", Tecla, false); 
function Tecla(e) {
    if (ComprovaTecla(e.key)) {
    Calc(e.key);
    }
}

//Cribatge de tecles sense relació
function ComprovaTecla(tecla) {
    let teclabona = false;
    if (tecla == "+" ||
        tecla == "-" ||
        tecla == "x" || tecla == "*" ||
        tecla == "÷" || tecla == "/" ||
        tecla == "%" ||
        tecla == "=" || tecla == "Enter" ||
        tecla == "." ||
        tecla == "C" ||
        tecla == "Backspace" ||
        !isNaN(parseFloat(tecla))) {
        teclabona = true;
    } else {
        alert("Tecla incompatible: "+tecla);
    }
    return teclabona;
}

// Funció principal dels botons
function Calc(valor) {
    pantalla = document.getElementById("pantalla").textContent;
    if (pantalla === undefined) {pantalla = "";}
    if (!isNaN(parseFloat(valor)) ||
        (valor == "." && ((pantalla.indexOf(".")==-1) || (pantalla.lastIndexOf(".")<pantalla.indexOf(operador))))) {
        pantalla = pantalla + valor;
    } else {
        switch(valor){
            case "+":
            case "-":
            case "x":
            case "*":
            case "÷":
            case "/":
            case "%":
                if (operador == "") {
                    primerNum = parseFloat(pantalla);
                    operador = valor;
                    pantalla = pantalla + valor;
                }
                break;
            case "±":
                if (pantalla.charAt(0) == "-") {pantalla = pantalla.substring(1, pantalla.length);}
                else {pantalla = "-"+pantalla;}
                break;
            case "C":
                primerNum = "";
                segonNum = "";
                operador = "";
                pantalla = "";
                break;
            case "CE":
            case "Backspace":
                pantalla = pantalla.substring(0,pantalla.length-1);
                break;
            case ".":
                break;
            case "=":
            case "Enter":
                if (operador != "") {
                    index = pantalla.indexOf(operador,1);
                    segonNum = parseFloat(pantalla.substring(index+1, pantalla.length));
                    pantalla = igual(primerNum, operador, segonNum);
                    primerNum = "";
                    segonNum = "";
                    operador = "";
                }
                break;
            default:
                alert ("Hi ha hagut un problema amb l'ordre '"+valor+"'");
                pantalla = "";
        }
    }
    document.getElementById("pantalla").innerHTML = pantalla;
}

// Càlcul en prémer igual o enter 
function igual(primerNum, operador, segonNum) {
    let resultat;
    switch(operador){
        case "+":
            resultat = primerNum+segonNum;
            break;
        case "-":
            resultat = primerNum-segonNum;
            break;
        case "x":
        case "*":
            resultat = primerNum*segonNum;
            break;
        case "÷":
        case "/":
            if (segonNum == 0) {alert("No es pot dividir per 0"); resultat = "";}
            else {resultat = primerNum/segonNum;}
            break;
        case "%":
            resultat = primerNum%segonNum;
            break;
        default:
            resultat="Math.error(UnknownOp"+operador+")";
    }
    console.log(primerNum +" "+ operador +" "+ segonNum + " = " + resultat);
    return resultat;
}