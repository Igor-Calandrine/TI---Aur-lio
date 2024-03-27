// Math Random
//Observe o código abaixo para gerar números aleatórios
//      Math.random (), irá gerar um número aleatório (pseudoaleatório) entre [0 e 1[ com até 16 casas depois da vírgula
// Math.random () * 30, irá gerar um número aleatório e teremos como parâmetro um némero de [0 a 30[
//      Math.floor (), Math.floor irá arredondar o número para casa inteira menor mais próxima
// Math.floor (Math.random () * 30)
//      parseInt (), irá pegar apenas a parte inteira do número para apresentar o valor
// parseInt (Math.random () * 30)
//      Math.number () * (máx-min) + min, irá gerar um intervalo entre Min e Máx com o Min incluso
// Math.number () * (21-15) + 15
//      Math.floor(Math.random() * (max - min + 1)) + min; irá incluir o número Min e Máx


alert("Bom dia pessoal, vamos jogar?");
//let NumeroSecreto = 15;
// Será acrescentado + 1 para se somar o resultado e se ter um número entre 1 e 30
let NumeroSecreto = parseInt (Math.random () * 30 + 1);
let Chute
console.log (NumeroSecreto);
console.log (NumeroSecreto == Chute);
let tentativas = 0

//Processo de repetição

while (Chute != NumeroSecreto) 
{
let PalavraNovo = tentativas == 0 ? "" : "novo ";
Chute = prompt(`Escolha um ${PalavraNovo}número de 1 a 30`);
tentativas++
if (NumeroSecreto == Chute) {break;}
else {alert("Que pena! Você errou o número (" +Chute+ "), mas tente outra vez!")};
if (Chute < NumeroSecreto) {alert("O número secreto é maior que " +Chute)};
if (Chute > NumeroSecreto) {alert("O número é menor que " +Chute)};
};

let PalavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";
{alert(`Parabéns! Esse é o número secreto ${NumeroSecreto}, você acertou com ${tentativas} ${PalavraTentativas}!`)};
