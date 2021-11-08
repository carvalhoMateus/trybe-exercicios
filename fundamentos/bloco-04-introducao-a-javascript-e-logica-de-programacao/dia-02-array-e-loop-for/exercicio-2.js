let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

// for (i = 0; i < numbers.length; i++) {
//     console.log(i);
// }

//2 & 3

// let soma = 0;

// for(i=0; i < numbers.length; i++) {
//     soma += numbers[i];

// }

// console.log(soma);


// O código acima foi pego no endereço: "https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981"

//4

// let soma = 0;

// for(i=0; i < numbers.length; i+=1) {
//     soma += numbers[i];

// }

// let media = soma / numbers.length

// if(media > 20) {
//     console.log("Valor maior que 20")
// } else {
//     console.log("Valor menor ou igual a 20")
// }

//5

// let higherNumber = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

//6

// let resultado = 0;

// for(i=0; i < numbers.length; i+=1) {
    
//     if(numbers[i] % 2 !== 0) {
//         resultado+= 1;
// } else{

// }
// }

// if (resultado === 0) {
//     console.log("Nenhum valor ímpar encontrado")
// } else {
//     console.log(resultado);
//}

//7

// let menor = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menor) {
//     menor = numbers[index];
//   }
// }

//  console.log(menor);

 // 8

// let novoArray = []

//  for(i = 1; i <= 25; i +=1) {
//      novoArray.push(i)
//  }

//  console.log(novoArray);

 //9

 novoArray = []

 for(i = 1; i <= 25; i +=1) {
     novoArray.push(i)
 }

for(i = 0; i < novoArray.length; i+=1){
    console.log(novoArray[i]  / 2);
}
 


