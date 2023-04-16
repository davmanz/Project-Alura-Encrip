// Objetos del HTML
 const box_main= document.querySelector('#prp-text-area')
 const caja_muneico= document.querySelector('#caja-muneico')
 const w2_caja_texto= document.querySelector('#w2-caja-texto')
 const texto_traducido= document.querySelector('#texto-traducido')

// Variables de encriptacion
const original= ['e','i','a','o','u']
const encrip= ['enter','imes','ai','ober','ufat']

//Funcion para encriptar
function encriptar(){
  let texto= box_main.value.toLowerCase();
  let texto_encriptado=texto;
  for(i=0; i < original.length; i++){
    texto_encriptado= texto_encriptado.replace(new RegExp(original[i],'g'),encrip[i]);
  }
  texto_traducido.textContent= texto_encriptado;
  activacion_texto();
  alert(texto_encriptado);
  }

//Funcion para desencriptar
function desencriptar(){
  let texto= box_main.value.toLowerCase();
  let texto_desencriptado=texto;
  for(i=0; i < original.length; i++){
    texto_desencriptado= texto_desencriptado.replace(new RegExp(encrip[i],'g'),original[i]);
  }
  alert(texto_desencriptado);
  }

  function activacion_texto(){
    caja_muneico.style.display= 'none';
    w2_caja_texto.style.display= 'none';
    texto_traducido.style.display= 'block';
  }