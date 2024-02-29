/*
Converta a temperatura x (entrada manual) FAHRENHEIT para CELSIUS, Segue a fórmula 9/5 (°F - 32). 
Nome: Letícia Calixto Diniz
*/

let teclad = require (`prompt-sync`)();

let celsius: number = parseFloat(teclado(`digite a temperatura em °F`));

let fahrenheit: number = (celsius * (5/9)) -32;

console.log(`O valor da conversão é: ${celsius}`);