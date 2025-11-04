/*
    ARRAY - vetor - lista
*/

const numeros = [1, 2, 3, 4, 5]
console.log(numeros); // Exibe o array completo
console.log(numeros[0]); // Exibe o primeiro elemento do array
console.log(numeros[2]); // Exibe o terceiro elemento do array
console.log(numeros.length); // Exibe a quantidade de elementos no array    
console.log(numeros[numeros.length - 1]); // Exibe o último elemento do array
numeros.push(6); // Adiciona o elemento 6 no final do array
console.log(numeros); // Exibe o array atualizado
numeros.pop(); // Remove o último elemento do array
console.log(numeros); // Exibe o array atualizado
