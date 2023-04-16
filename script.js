// Variables de encriptacion
  const original= ['e','i','a','o','u']
  const encrip= ['enter','imes','ai','ober','ufat']

//Funcion para encriptar

function encriptar(){
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let texto_encriptado=texto;
  for(i=0; i < original.length; i++){
    texto_encriptado= texto_encriptado.replace(new RegExp(original[i],'g'),encrip[i]);
  }
  alert(texto_encriptado);
  }

//Funcion para desencriptar
function desencriptar(){
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let texto_desencriptado=texto;
  for(i=0; i < original.length; i++){
    texto_desencriptado= texto_desencriptado.replace(new RegExp(encrip[i],'g'),original[i]);
  }
  alert(texto_desencriptado);
  }