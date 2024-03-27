// Palavras no singular e plural

alert("Bom dia pessoal, vamos jogar?");
let NumeroSecreto = 15;
let Chute
console.log (NumeroSecreto);
console.log (NumeroSecreto == Chute);
let tentativas = 0

//Processo de repetição
// Ortografia, Retirada do if de dentro de outro if
while (Chute != NumeroSecreto) 
{
Chute = prompt("Escolha um novo número");
tentativas++
if (NumeroSecreto == Chute)
    {
    if (tentativas == 1) {alert("Parabéns! Esse é número secreto (" +NumeroSecreto+ "), você acertou com " +tentativas+ " tentativa!")}
    else {alert("Parabéns! Esse é número secreto (" +NumeroSecreto+ "), você acertou com " +tentativas+ " tentativas!")};
    }
else {alert("Que pena! Você errou o número (" +Chute+ "), mas tente outra vez!")};
if (Chute < NumeroSecreto) {alert("O número secreto é maior que " +Chute)};
if (Chute > NumeroSecreto) {alert("O número é menor que " +Chute)};
};



// tirar o if de dentro de um if para evitar problemas de interpretação