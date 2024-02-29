/*
2 - Faça a média de 10 número (entrada via teclado) e exiba o resultado. 
Nome Letícia Diniz
*/

let teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nDois: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nTres: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nQuatro: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nCinco: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nSeis: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nSete: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nOito: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nNove: number = parseFloat(teclado(`Digite o primeiro numero:`)); 
let nDez: number = parseFloat(teclado(`Digite o primeiro numero:`));
 
let media : number = (nUm+nDois+nTres+nQuatro+nCinco+nSeis+nSete+nOito+nNove+nDez) 

console.log(`media é ${media}`)