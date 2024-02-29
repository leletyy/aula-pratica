/*
3 -Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, 
Segue a formula (°C × 9/5) + 32. 
Nome:Letícia Calixto Diniz
*/

let teclad = require (`prompt-sync`)();

let celsius: number = parseFloat(teclado(`digite a temperatura em °C`));

let fahrenheit: number = (celsius * (9/5)) +32;

console.log(`O valor da conversão é: ${fahrenheit}`);