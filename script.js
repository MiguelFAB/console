console.log("Ola");
var primeiroNome = 'Miguel';
var primeiroSobreNome = ' Foloni';
var NomeCompleto = primeiroNome.concat(primeiroSobreNome)
console.log(NomeCompleto);
var TamanhoNome = NomeCompleto.length;
console.log(TamanhoNome);
var Frase = 'Eu Sou Miguel';
console.log(Frase);
var SubstituiNome = Frase.replace("Miguel","João");
console.log(SubstituiNome);
var nomeEmMaiusculo = primeiroNome.toUpperCase();
console.log(nomeEmMaiusculo);
var nomeEmMinusculo = primeiroNome.toLowerCase();
console.log(nomeEmMinusculo);
var c = 0.3;
c = Math.sqrt(c);
console.log(c);
var numeros = [65,60,28,40,29];
var numeroMaior = Math.max(...numeros);
console.log(numeroMaior);
var numeroMenor = Math.min(...numeros);
console.log(numeroMenor);
var potencia = Math.pow(5,2);
console.log(potencia);
var NumeroGrande = 3.14159265358979323846;
NumeroGrande = NumeroGrande.toFixed(2);
console.log(NumeroGrande);
var a = 1040909090900;
var b = 50;
console.log(a+b);
var aParaString = a.toString();
var bParaString = b.toString();
console.log(aParaString+bParaString);
var incrementaNumero = 10;
incrementaNumero++;
console.log(incrementaNumero)
var decrementaNumero = 10;
decrementaNumero--;
console.log(decrementaNumero)