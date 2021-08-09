function Palindromo(palavra) {
    return (palavra.split('').reverse().join('') === palavra) ? 'é palíndromo.' : 'não é palíndromo.';
}

console.log('OVO ' + Palindromo('OVO'));
console.log('ANA ' + Palindromo('ANA'));
console.log('NATAN ' + Palindromo('NATAN'));
console.log('BOLA ' + Palindromo('BOLA'));