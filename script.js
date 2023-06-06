var btnencriptar=document.querySelector(".codificar");
var btndesifrar=document.querySelector(".desifrar");
var munieco=document.querySelector(".contmunieco");
var contenedor=document.querySelector(".contenedorparrafo");
var resultado=document.querySelector(".textoresultado");

btnencriptar.onclick=encriptar;
btndesifrar.onclick=desifrar;

function encriptar() {
	ocultarAdelante();
	var cajatexto = recuperarTexto();
	resultado.textContent =encriptartexto(cajatexto);
}
function desifrar() {
	ocultarAdelante();
	var cajatexto = recuperarTexto()
	resultado.textContent =desifrartexto(cajatexto);
}
function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}



function ocultarAdelante() {
	munieco.classList.add("ocultar");
	contenedor.classList.add("ocultar");
}
function encriptartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desifrartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btncopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoresultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("copiado");
});