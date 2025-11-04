const pessoa = {
    nome: 'Jeffeson',
    idade: 32,
    sexo: 'Masculino',
    altura: 1.76,
    //endereco: 'Rua peru, 3115' // Pode fazer assim
    endereco: {
        rua: 'Rua Peru',
        numero: 3115,
        cidade: 'Vera',
        estado: 'MT'
    }
}

console.log(pessoa); // Exibe o objeto completo
console.log(pessoa.nome); // Exibe o valor da propriedade 'nome'
console.log(pessoa.idade); // Exibe o valor da propriedade 'idade'
console.log(pessoa.sexo); // Exibe o valor da propriedade 'sexo'
console.log(pessoa.altura); // Exibe o valor da propriedade 'altura'
console.log(pessoa.endereco.cidade); // Exibe o valor da propriedade 'cidade' dentro do objeto 'endereco'
console.log(pessoa.endereco.estado); // Exibe o valor da propriedade 'estado' dentro do objeto 'endereco'   


