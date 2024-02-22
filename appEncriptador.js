let textoUsuario = "";
let textoEncriptado = "";

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Oculta boton de copiar
document.getElementById("botonCopy").style.display = "none";

function encriptar(){
    //Oculta imagen y mensajes dentro del rectangulo
    document.getElementById("dentroRectangulo").style.display = "none"; 
    //Muestra el boton de copiar
    document.getElementById("botonCopy").style.display = ""; 

    //Obtiene el texto que escribe el usuario
    textoUsuario = document.getElementById("ingresarTexto").value;
    //Reemplaza las letras
    textoEncriptado = textoUsuario.replaceAll("e", "enter") .replaceAll("i", "imes") .replaceAll("a", "ai") .replaceAll("o", "ober") .replaceAll("u", "ufat");

    //Si el user escribe texto
    if(textoUsuario.length != 0){
        //Por cada letra va revisar que se cumpla lo establecido (letras en minusculas, y sin caracteres especiales)
        for(let i=0; i<textoUsuario.length; i++){
            if(!(textoUsuario.charCodeAt(i) >= 97 && textoUsuario.charCodeAt(i) <= 122) && !(textoUsuario.charCodeAt(i) == 32)){
                //Si entran mayusculas u otros caracteres diferentes a los establecidos dara un alert
                alert("Ingrese texto en minúsculas y sin caracteres especiales");
                //Muestra la imagen y los mensajes
                document.getElementById("dentroRectangulo").style.display = "";
                //Oculta el boton de copiar
                document.getElementById("botonCopy").style.display = "none";
                //No muestra el texto que se haya introducido
                document.getElementById("textoUsuarioEncriptado").style.display = "none";
            }else{
                //Si la condicion se cumple, muestra el texto encriptado
                asignarTextoElemento("#textoUsuarioEncriptado", `${textoEncriptado}`);
                document.getElementById("textoUsuarioEncriptado").style.display = "";
            }
        }
    }else{
        //Muestra un alert en el caso de que no se haya introducido texto
        alert("Ingrese texto para ser encriptado");
        document.getElementById("dentroRectangulo").style.display = "";
        document.getElementById("botonCopy").style.display = "none";
        document.getElementById("textoUsuarioEncriptado").style.display = "none";
    }
    return false;
}

function desencriptar(){
    document.getElementById("dentroRectangulo").style.display = "none";
    document.getElementById("botonCopy").style.display = "";

    textoUsuario = document.getElementById("ingresarTexto").value;
    textoEncriptado = textoUsuario.replaceAll("imes", "i") .replaceAll("enter", "e") .replaceAll("ai", "a") .replaceAll("ober", "o") .replaceAll("ufat", "u"); 

    if(textoUsuario.length != 0){
        for(let i=0; i<textoUsuario.length; i++){
            if(!(textoUsuario.charCodeAt(i) >= 97 && textoUsuario.charCodeAt(i) <= 122) && !(textoUsuario.charCodeAt(i) == 32)){
                alert("Ingrese texto en minúsculas y sin caracteres especiales");
                document.getElementById("dentroRectangulo").style.display = "";
                document.getElementById("botonCopy").style.display = "none";
                document.getElementById("textoUsuarioEncriptado").style.display = "none";
            }else{
                asignarTextoElemento("#textoUsuarioEncriptado", `${textoEncriptado}`);
                document.getElementById("textoUsuarioEncriptado").style.display = "";
            }
        }
    }else{
        alert("Ingrese texto para ser desencriptado");
        document.getElementById("dentroRectangulo").style.display = "";
        document.getElementById("botonCopy").style.display = "none";
    }
    return;
}

function copiarTexto(){
    navigator.clipboard.writeText(textoEncriptado)
    .then(() => {
        alert("Texto copiado");
        console.log("Texto copiado")})
    .catch(err => {
        alert("Error al copiar texto");
        console.error("Error al copiar texto", err)});
}