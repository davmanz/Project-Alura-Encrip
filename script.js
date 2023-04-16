// Diccionario donde esta la informacion de encriptacio
  
  const original= ['a','e','i','o','u']
  const encrip= ['ai','enter','imes','ober','ufat']

//Funcion para encriptar usando el diccionario 
function encriptar(){
  
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let texto_encriptado = "";
  
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (original.includes(caracter)) {
      let pos_caracter=0;
      for (let x= 0; x < original.length; x++){
        if( original[x] == caracter){
          pos_caracter= x
          break
        }else{
          continue
        } 
      }
      texto_encriptado += encrip[pos_caracter];
    }else {
      texto_encriptado += caracter;
    }
  }

  alert(texto_encriptado)
}
  /*
  function encriptar(){
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let texto_encriptado= texto.replace(clave[0],valor[0])
                             .replace(clave[1],valor[1])
                             .replace(clave[2],valor[2])
                             .replace(clave[3],valor[3])
                             .replace(clave[4],valor[4]);
  alert(texto_encriptado);
  }
  */
  
  function desencriptar(){
  let texto= document.getElementById('prp-text-area').value.toLowerCase();
  let texto_desencriptado= texto.replace(encrip[0],original[0])
                                .replace(encrip[1],original[1])
                                .replace(encrip[2],original[2])
                                .replace(encrip[3],original[3])
                                .replace(encrip[4],original[4]);
  alert(texto_desencriptado);
  }