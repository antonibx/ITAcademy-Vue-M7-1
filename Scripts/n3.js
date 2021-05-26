// Variables
var subtotal = "";
var primerNum = "";
var segonNum = "";
var operador;

// Números
function num0() {subtotal = subtotal + 0; document.getElementById("pantalla").innerHTML = subtotal;}
function num1() {subtotal = subtotal + 1; document.getElementById("pantalla").innerHTML = subtotal;}
function num2() {subtotal = subtotal + 2; document.getElementById("pantalla").innerHTML = subtotal;}
function num3() {subtotal = subtotal + 3; document.getElementById("pantalla").innerHTML = subtotal;}
function num4() {subtotal = subtotal + 4; document.getElementById("pantalla").innerHTML = subtotal;}
function num5() {subtotal = subtotal + 5; document.getElementById("pantalla").innerHTML = subtotal;}
function num6() {subtotal = subtotal + 6; document.getElementById("pantalla").innerHTML = subtotal;}
function num7() {subtotal = subtotal + 7; document.getElementById("pantalla").innerHTML = subtotal;}
function num8() {subtotal = subtotal + 8; document.getElementById("pantalla").innerHTML = subtotal;}
function num9() {subtotal = subtotal + 9; document.getElementById("pantalla").innerHTML = subtotal;}

// Operadors
function suma() {if (subtotal == "") {primerNum = 0;} else {primerNum = parseFloat(subtotal)}; operador = "+"; subtotal=""; document.getElementById("pantalla").innerHTML = primerNum+operador;}
function rest() {if (subtotal == "") {primerNum = 0;} else {primerNum = parseFloat(subtotal)}; operador = "-"; subtotal=""; document.getElementById("pantalla").innerHTML = primerNum+operador;}
function mult() {if (subtotal == "") {primerNum = 0;} else {primerNum = parseFloat(subtotal)}; operador = "*"; subtotal=""; document.getElementById("pantalla").innerHTML = primerNum+operador;}
function divi() {if (subtotal == "") {primerNum = 0;} else {primerNum = parseFloat(subtotal)}; operador = "/"; subtotal=""; document.getElementById("pantalla").innerHTML = primerNum+operador;}
function mod() {if (subtotal == "") {primerNum = 0;} else {primerNum = parseFloat(subtotal)}; operador = "%"; subtotal=""; document.getElementById("pantalla").innerHTML = primerNum+operador;}

// Especials
function coma() {if (subtotal.indexOf(".") == -1) {subtotal = subtotal + "."}; document.getElementById("pantalla").innerHTML = subtotal;}
function inici() {subtotal = ""; primerNum=""; segonNum=""; document.getElementById("pantalla").innerHTML = "0";}
function desf() {subtotal = subtotal.substring(0,subtotal.length-1); document.getElementById("pantalla").innerHTML = subtotal;}
function nega() {if (subtotal.charAt(0) == "-") {subtotal = subtotal.substring(1,subtotal.lenght)} else {subtotal = "-"+subtotal}; document.getElementById("pantalla").innerHTML = subtotal;}

// Càlculs
function igual() {
    let resultat;
    if (primerNum !== "" && subtotal !== "") { 
        segonNum = parseFloat(subtotal);
        switch(operador){
            case "+":
                resultat = primerNum+segonNum;
                break;
            case "-":
                resultat = primerNum-segonNum;
                break;
            case "*":
                resultat = primerNum*segonNum;
                break;
            case "/":
                if (segonNum == 0) {resultat = "Math.error(divBy0)";}
                else {resultat = primerNum/segonNum;}
                break;
            case "%":
                resultat = primerNum%segonNum;
                break;
            default:
                resultat="Math.error(UnknownOp"+operador+")";
        }
        document.getElementById("pantalla").innerHTML = resultat;
        console.log(primerNum+operador+segonNum+"="+resultat);
        primerNum=""; segonNum=""; subtotal=""+resultat;
    }
}