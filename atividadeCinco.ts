const tecla = require (`prompt-sync`)();// declaração teclado
/*para receber os dados do teclado é necessario instalar os
 pacotes riquere e prompt-sync
 */

let age : number = parseFloat (teclado(`Digite sua idade:`));

if (age >= 18){
    console.log(`Maior de idade!!`);
}
else{
    console.log(`Menor de idade`);
    }