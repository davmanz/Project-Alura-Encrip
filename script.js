// Objetos del HTML
 const box_main= document.querySelector('#prp-text-area')
 const caja_muneico= document.querySelector('#caja-muneico')
 const w2_caja_texto= document.querySelector('#w2-caja-texto')
 const texto_traducido= document.querySelector('#texto-traducido')
 const btn_copiar= document.querySelector('#btn-copiar')

// Variables de encriptacion
const original= ['e','i','a','o','u']
const encrip= ['enter','imes','ai','ober','ufat']

// Funcion para eliminar las mayusculas y los acentos
function procesar_texto(){
  let data= box_main.value.toLowerCase();
  data = data.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return data;
}

//Funcion para encriptar
function encriptar(){
  let texto_encriptado= procesar_texto();
  for(i=0; i < original.length; i++){
    texto_encriptado= texto_encriptado.replace(new RegExp(original[i],'g'),encrip[i]);
  }
  texto_traducido.textContent= texto_encriptado;
  activacion_texto();
  }

//Funcion para desencriptar
function desencriptar(){
  let texto_desencriptado= procesar_texto();
  for(i=0; i < original.length; i++){
    texto_desencriptado= texto_desencriptado.replace(new RegExp(encrip[i],'g'),original[i]);
  }
  texto_traducido.textContent= texto_desencriptado;
  activacion_texto();
  }

  function activacion_texto(){
    caja_muneico.style.display= 'none';
    w2_caja_texto.style.display= 'none';
    texto_traducido.style.display= 'block';
    btn_copiar.style.display= 'inline';
    btn_copiar.disabled= false;
  }

  function copiar(){
    let copia= texto_traducido.textContent.toLowerCase();
    navigator.clipboard.writeText(copia);
  }