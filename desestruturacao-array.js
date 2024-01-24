const array = [1, 2, 3, 4, 5, 6];

//const a = array [0];  jeito mais dificil
//const b = array [1];

const [a, b, ...resto] = array   // => funciona com resto somente no final

// const [a, ...resto, b] = array  => nao funciona com resto no meio



console.log(a, b, resto);