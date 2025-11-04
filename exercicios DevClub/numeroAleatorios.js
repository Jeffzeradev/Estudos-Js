const aleatorio = Math.floor(Math.random() * 100 + 1) 
console.log(aleatorio); 

/* Explicação:

Math.random() → gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
Math.random() * 100 → agora o número vai de 0 até 99.999...
Math.floor() → arredonda para baixo, transformando em número inteiro.
+ 1 → ajusta o intervalo para 1 até 100 (em vez de 0 até 99).
 */
