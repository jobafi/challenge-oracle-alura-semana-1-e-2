
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

document.getElementById("btn-cripto").onclick = encrypt;
document.getElementById("btn-descripto").onclick = decrypt;

function encrypt(event) {
  
  event.preventDefault();

  var input1 = document.getElementById("input-texto");
  var textString = "";
  textString = input1.value;
  var textUser = textString.toLowerCase();

  var textOne = textUser.split("");
  var textEncrypt = textOne.toString();

  // criando função para criptografar texto fornecdido pelo usário / trocando as letras das strings:
  var trocaLts = textEncrypt.replaceAll(/e/gi, "enter"); trocaLts = trocaLts.replaceAll(/i/gi, "imes"); trocaLts = trocaLts.replaceAll(/a/gi, "ai"); trocaLts = trocaLts.replaceAll(/o/gi, "ober"); trocaLts = trocaLts.replaceAll(/u/gi, "ufat"); trocaLts = trocaLts.replaceAll(',', '');

  console.log(trocaLts); // não está funcionando corretamente...

  var input2 = document.getElementById('msg');
  input2.value = trocaLts;
}

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

function decrypt(event) {

  event.preventDefault();
  
  var input1 = document.getElementById("input-texto");
  var textForDecrypt = input1.value;

  var textOne = textForDecrypt.split("");
  var textDecrypt = textOne.toString();

  textDecrypt = textDecrypt.replaceAll(",","");
  var trocaLts = textDecrypt.replaceAll(/enter/gi, "e"); trocaLts = trocaLts.replaceAll(/imes/gi, "i"); trocaLts = trocaLts.replaceAll(/ai/gi, "a"); trocaLts = trocaLts.replaceAll(/ober/gi, "o"); trocaLts = trocaLts.replaceAll(/ufat/gi, "u"); trocaLts = trocaLts.replaceAll(',', '');

  var input2 = document.getElementById('msg');
  input2.value = trocaLts;
}