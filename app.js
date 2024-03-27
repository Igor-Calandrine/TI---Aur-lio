alert("Bom dia pessoal, vamos jogar?");
let NumeroSecreto = 15;
console.log (NumeroSecreto);
let Chute = prompt("Escolha um número de 1 a 30"); 
console.log (NumeroSecreto == Chute);
let tentativas = 1

// Condição de erro e acerto do número secreto

if (NumeroSecreto == Chute) {alert("Parabéns! Esse é número secreto (" +NumeroSecreto+ "), você acertou com " +tentativas+ " tentativa!")}
else {alert("Que pena! Você errou o número (" +Chute+ "), mas tente outra vez!");
+console.log (NumeroSecreto)} 


// Condição de erro do número secreto

if (Chute < NumeroSecreto) {alert("O número secreto é maior que " +Chute)};
if (Chute > NumeroSecreto) {alert("O número é menor que " +Chute)};

//Processo de repetição

while (Chute != NumeroSecreto)
{
let Chute = prompt("Escolha um novo número");

//tentativas = tentativas + 1
//Breack Parar quando a condição for atendida

tentativas++;
if (NumeroSecreto == Chute) {breack; alert("Parabéns! Esse é número secreto (" +NumeroSecreto+ "), você acertou com " +tentativas+ " tentativas!")}
else {alert("Que pena! Você errou o número (" +Chute+ "), mas tente outra vez!")};
if (Chute < NumeroSecreto) {alert("O número secreto é maior que " +Chute)};
if (Chute > NumeroSecreto) {alert("O número é menor que " +Chute)};
};


