const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

/*
 Escreva uma função que retorna um array com as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar
  os resultados à página.
 */
const kata1 = () => {
   let arrCities = gotCitiesCSV.split(',');
   return arrCities;
}
console.log(kata1());//ok

/*
 Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata2 = () => {
    let arrWords = bestThing.split(' ');
    return arrWords;
}
console.log(kata2());//ok

/*
 Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata3 = () => {
    let output = gotCitiesCSV.split(',');
    return output.join('; ');
}
console.log(kata3());//ok

/*
 Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata4 = () => {
    let output = lotrCitiesArray.join(', ')
    return output;
}
console.log(kata4());//ok

/*
 Escreva uma função que retorna um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata5 = () => {
    let output = [];
    for(let i=0; i<5; i++){
        output.push(lotrCitiesArray[i]);
    }
    return output;
}
console.log(kata5());//ok

/*
 Escreva uma função que retorna um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata6 = () => {
    let output = [];
    let arrReverse = lotrCitiesArray.reverse();
    for(let i=0; i<5; i++){
        output.push(arrReverse[i]);
    }
    return output;
}
console.log(kata6());//ok
 
/*
 Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também 
  adicionar os resultados à página.
*/
const kata7 = () => {
    let arr = lotrCitiesArray.reverse()
    let output = [];
    for(let i=0; i<arr.length; i++){
        if(i < 5 && i > 1){
            output.push(arr[i])
        }
    }
    return output;
}
console.log(kata7());//ok

/*
 Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray'
  modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata8 = () => {
    let newArr = lotrCitiesArray.map(cit => cit);
    newArr.splice(2,1);
    return newArr;
}
console.log(kata8());//ok
    
/*
 Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray'
  e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata9 = () => {
    let newArr = lotrCitiesArray.map(cit => cit);
    newArr.splice(5,newArr.length);
    return newArr;
}
console.log(kata9());//ok

/*
 Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor'
  e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata10 = () => {
    let output = kata8();
    output.splice(2,0, 'Rohan');
    return output;
}
console.log(kata10());

/*
 Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e
  retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata11 = () => {
   let output = lotrCitiesArray;
   output.splice(5,1,'Deadest Marshes');
   return output.join(' ,');
}
console.log('kata11==> '+kata11());

/*
 Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata12 = () => {
  let arr = bestThing.split('');
  let newArr = arr.slice(0,14);
  return newArr.join(',');
}
console.log('kata12==> '+kata12());
/*
 OBS:
 Eu ia usar o .replace(/ /g, ""); para remover os espaços em branco e retornar somente os caracteres porém espaços em branco
 também são considerados caracteres!.
*/

/*
 Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres de 'bestThing'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata13 = () => {
  let arr = bestThing.split('');
  let newArr = arr.slice(arr.length -12);
  return newArr.join(',');
}
console.log('kata13==> '+kata13());

/*
 Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38
  de 'bestThing'. Lembre-se de também adicionar os resultados à página.
*/
const kata14 = () => {
  let arr = bestThing.split('');
  let newArr = arr.slice(23,38);
  return newArr.join(',');
}
console.log('kata14==> '+kata14());

/*
 Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring' em vez de 'slice'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata15 = () => {
  let arr = bestThing;
  let newArr = arr.substring(arr.length -12);
  let output = newArr.split('').join(',');
  return output;
}
console.log('kata15==> '+kata15());

/*
 Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' em vez de 'slice'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata16 = () => {
  let arr = bestThing;
  let newArr = arr.substring(23,38);
  let output = newArr.split('').join(',');
  return output;
}
console.log('kata16==> '+kata16());

/*
 Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne o novo array.
  Lembre-se de também adicionar os resultados à página.
*/
const kata17 = () => {
   let arr = JSON.parse(JSON.stringify(lotrCitiesArray));
   let arrEnd = arr[arr.length];
   arr.forEach((element,i) => {
     if(element[i]===arr[arrEnd]){
        arr.pop(element);
     }
   });
   return arr;
}
console.log('kata17==> '+kata17());

/*
 Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray'
  que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar os resultados à página.
*/
const kata18 = () => {
  let arr = lotrCitiesArray;
  //variavel para armazenar o item removido
  let itemRemoved = '';
  arr.forEach((element,i) => {
    if(element[i] === arr[arr.length]){
      itemRemoved = arr.pop(element[i]);
      //pegando o item removido
    }
  });
  //inserindo-o de volta na lista
  arr.push(itemRemoved)
  return arr;
}
console.log('kata18==> '+kata18());

/*
 Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array.
  Lembre-se de também adicionar os resultados à página.
*/
const kata19 = () => {
  let arr = JSON.parse(JSON.stringify(lotrCitiesArray));
  arr.shift();
  return arr;
}
console.log('kata19==> '+kata19());

/*
 Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray'
  que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página.
*/
const kata20 = () => {
  let arr = JSON.parse(JSON.stringify(lotrCitiesArray));
  //armazenando o item removido
  let itemRemoved = arr.shift();
  //o adicionando de volta no inicio
  arr.unshift(itemRemoved)
  return arr;
}
console.log('kata20==> '+kata20());

/*
 KATAS_BÔNUS
*/

/*
 Escreva uma função que transforme a variável 'bestThing' em um array, encontre e **retorne** o índice da palavra
  'only' dentro dela. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus1 = () => {}

/*
 Escreva uma função que encontre e **retorne** o índice da última palavra do array 'bestThing'. Lembre-se de
  também**adicionar os resultados à página**.
*/
const kata_Bonus2 = () => {}

/*
 Escreva uma função que encontre e **retorne** um array de todas as cidades do array 'gotCitiesCSV' que tiverem
  vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus3 = () => {}

/*
 Escreva uma função que encontre e **retorne** um array com todas as cidades do array 'lotrCitiesArray' que 
 terminem em 'or'. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus4 = () => {}

/*
 Escreva uma função que encontre e **retorne** um array com todas as palavras de 'bestThing' que começa com 'b'.
  Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus5 = () => {}

/*
 Escreva uma função que **retorne** 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se
  de também**adicionar os resultados à página**.
*/
const kata_Bonus6 = () => {}

/*
 Escreva uma função que **retorne** 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de
  também **adicionar os resultados à página**.
*/
const kata_Bonus7 = () => {}

/*
 Escreva uma função que **retorne** o índice da palavra 'Mirkwood' no array 'lotrCitiesArray'. Lembre-se de também
  **adicionar os resultados à página**.
*/
const kata_Bonus8 = () => {}

/*
 Escreva uma função que encontre e **retorne** a primeira cidade do array 'lotrCitiesArray' que tiver mais de uma palavra.
  Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus9 = () => {}

/*
 Escreva uma função que inverta a ordem do array 'lotrCitiesArray' e **retorne** o novo array. Lembre-se de também 
 **adicionar os resultados à página**.
*/
const kata_Bonus10 = () => {}

/*
 Escreva uma função que ordene o array 'lotrCitiesArray' alfabeticamente e **retorne** o novo array. Lembre-se de também
  **adicionar os resultados à página**.
*/
const kata_Bonus11 = () => {}

/*
 Escreva uma função que ordene o array 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo,
   a cidade mais curta aparece primeiro) e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus12 = () => {}


/*

*/
// var anyString = "Mozillaxxxx";
// // Mostra "Moz"]
// console.log(anyString.substring(0,3));
// console.log(anyString.substring(3));
// console.log(anyString.substring(anyString.length,3));
// console.log(anyString.substring(3,anyString.length));
// console.log(anyString.substring(anyString.length -4));
// let a = [1,2,3,4];
// let b = JSON.parse(JSON.stringify(a));
// b.pop()
// console.log(a)
// console.log(b)

