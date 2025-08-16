function valorhora(salario, horasmensais) {
    return salario / horasmensais;
}

function valorextra(valorporhora) {
    return valorporhora * 1.5;
}

function valortotalextra(horaextra, valorhoraextra) {
    return horaextra * valorhoraextra;
}

function totalsalario(salario, totalextras) {
    return salario + totalextras;
}

let salario = parseFloat(prompt("Digite o salário mensal (R$):"));
let horasmensais = parseFloat(prompt("Digite a quantidade de horas trabalhadas por mês:"));
let horaextra = parseFloat(prompt("Digite a quantidade de horas extras realizadas:"));

let valorporhora = valorhora(salario, horasmensais);
let valorhoraextra = valorextra(valorporhora);
let totalextras = valortotalextra(horaextra, valorhoraextra);
let totalsalario = totalsalario(salario, totalextras);

alert(`Resumo de cálculo trabalhista:
    Salário base: R$ ${salario.toFixed(2)}
    Valor da hora extra (50%): R$ ${valorhoraextra.toFixed(2)}
    Total de horas extras: ${horaextra}h
    Valor total de extras: R$ ${totalextras.toFixed(2)}

    Total a receber: R$ ${totalsalario.toFixed(2)}
`);

// toFixed serve para travar a exibição do valor em 2 casas decimais, como por exemplo "R$ 100,50"
