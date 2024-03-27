// Como alterar o número máximo com apenas um comando?
//Observe os códigos abaixo
//Obs, experimente colocar a linha 8 depois da linha 9 e explique o resultado


alert("Bom dia pessoal, vamos jogar?");
//let NumeroSecreto = parseInt (Math.random () * 30 + 1);
let NumeroMaximoSecreto = 200;
let NumeroSecreto = parseInt(Math.random () * NumeroMaximoSecreto + 1);
let Chute;
console.log (NumeroSecreto);
console.log (NumeroSecreto == Chute);
let tentativas = 0

 

//Processo de repetição

while (Chute != NumeroSecreto) 
{
let PalavraNovo = tentativas == 0 ? "" : "novo ";
//Chute = prompt(`Escolha um ${PalavraNovo}número de 1 a 30`);
Chute = prompt(`Escolha um ${PalavraNovo}número de 1 a ${NumeroMaximoSecreto}`);
tentativas++
if (NumeroSecreto == Chute) {break;}
else {alert("Que pena! Você errou o número (" +Chute+ "), mas tente outra vez!")};
if (Chute < NumeroSecreto) {alert("O número secreto é maior que " +Chute)};
if (Chute > NumeroSecreto) {alert("O número é menor que " +Chute)};
};

let PalavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";
{alert(`Parabéns! Esse é o número secreto ${NumeroSecreto}, você acertou com ${tentativas} ${PalavraTentativas}!`)};