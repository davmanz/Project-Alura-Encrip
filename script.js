// Diccionario donde esta la informacion de encriptacion
const base_script= {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
}

const clave= ['a','e','i','o','u']
const valor= ['ai','enter','imes','ober','ufat']

const signos= [",",".",";",":","?","!","¡","¿","-","(",")","[","]","{","}","\"","/","'","#","$","^","@","*","_","=","+"]

//Funcion asociada al boton encriptar para obtener el texto del text-area
function obtener_texto(){
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  final= encriptar(texto, base_script);
  alert(final);
}

//Funcion para encriptar usando el diccionario 
function encriptar(texto, diccionario) {
  let texto_encriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (caracter in diccionario) {
      texto_encriptado += diccionario[caracter];
    }else {
      texto_encriptado += caracter;
    }
  }
  return texto_encriptado;
} 

function encriptar2() {
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let encriptado= "";
  for (let i = 0; i < clave.length; i++){
    texto= texto.replace(clave[i], valor[i]);
    alert(texto);
  }
  

}