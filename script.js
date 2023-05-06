// Objetos del HTML
const box_main= document.querySelector('.prp-text-area');
const caja_muneico= document.querySelector('#caja-muneico');
const w2_caja_texto= document.querySelector('#w2-caja-texto');
const texto_traducido= document.querySelector('#texto-traducido');
const btn_copiar= document.querySelector('.btn-copiar');
const aviso_texto= document.querySelector('.w1-obsv');
const boton_encriptar= document.querySelector('.btn-encriptar');
const boton_desencriptar= document.querySelector('.btn-desencriptar')
const aviso_a_w2= document.querySelector('.aviso-1');
const aviso_b_w2= document.querySelector('.aviso-2');
const copyr= document.querySelector('.copyright');
const select_idioma= document.querySelector('#idioma');

const lst_selectores=[
  box_main,
  aviso_texto, 
  aviso_a_w2, 
  aviso_b_w2,
  boton_encriptar,
   boton_desencriptar, 
   btn_copiar,
 ]

const lst_es= [
  'Ingresa el texto a cifrar',
  '<p>&#33; Solo letras minusculas y sin acento</p>',
  'Ningun mensaje fue encontrado',
  'Ingresa el texto que deseas encriptar o desencriptar',
  'Encriptar',
  'Desencriptar',
  'Copia'
]

const lst_en=[
  'Enter the text to encrypt',
  '<p>&#33; Only lowercase letters and no accents</p>',
  'No message was found',
  'Enter the text you want to encrypt or decrypt',
  'Encrypt',
  'Decrypt',
  'Copy',
]

const lst_pt=[
  'Digite o texto para criptografar',
  '<p>&#33; Apenas letras minúsculas e sem acentos</p>',
  'Nenhuma mensagem encontrada',
  'Digite o texto que deseja criptografar ou descriptografar',
  'Código',
  'Decifrar',
  'Cópia de'
]


// Variables de encriptacion
const original= ['e','i','a','o','u'];
const encrip= ['enter','imes','ai','ober','ufat'];

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

  function c_idioma(){
    let idioma_en_uso = select_idioma.value;

    if(idioma_en_uso === 'en'){
      lst_selectores[0].value= ''
      lst_selectores[0].placeholder= lst_en[0];

      for(let x=1; x < 4; x++){
        lst_selectores[x].innerHTML= lst_en[x]
      };
      for(let x=4; x < 7; x++){
        lst_selectores[x].value= lst_en[x]
      }
      
    }
    else if(idioma_en_uso === 'pt'){

      lst_selectores[0].value= ''
      lst_selectores[0].placeholder= lst_pt[0];

      for(let x=0; x < 4; x++){
        lst_selectores[x].innerHTML= lst_pt[x]
      };
      
      for(let x=4; x < 7; x++){
        lst_selectores[x].value= lst_pt[x]
      }
    }
    else{

      lst_selectores[0].placeholder= lst_es[0] 

      for(let x=0; x < 4; x++){
        lst_selectores[x].innerHTML= lst_es[x]
      };
      
      for(let x=4; x < 7; x++){
        lst_selectores[x].value= lst_es[x]
      }
    }
  }