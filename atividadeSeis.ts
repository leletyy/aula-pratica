const teclado = require (`prompt-sync`)();

let idade : number = 0;  
let salario : number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 0; 

while (pessoasContabilizadas <= 4){
  
    idade = parseInt(teclado(`Digite a idade ${pessoasContabilizadas}: `));
    salario = parseFloat(teclado(`Digite o salario do funcionario ${pessoasContabilizadas}: `));
    console.log(``);

    if (idade < 30 && salario > 3000){  
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
}
else{ 
    pessoasContabilizadas++;
}
}

console.log(``);
console.log(`O total de pessoas que atende a condição npm install typescript-require é ${totPessoasNaCondicao}`);
