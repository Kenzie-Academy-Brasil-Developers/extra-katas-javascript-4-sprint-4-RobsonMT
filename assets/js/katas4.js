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
// console.log(kata1());

/*
 Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata2 = () => {
    let arrWords = bestThing.split(' ');
    return arrWords;
}
// console.log(kata2());

/*
 Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata3 = () => {
    let output = gotCitiesCSV.split(',');
    return output.join('; ');
}
// console.log(kata3());

/*
 Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também
  adicionar os resultados à página.
*/
const kata4 = () => {
    let output = lotrCitiesArray.join(', ')
    return output;
}
// console.log(kata4());

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
// console.log(kata5());

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
// console.log(kata6());
 
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
// console.log(kata7());

/*
 Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray'
  modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata8 = () => {
    let newArr = lotrCitiesArray.map(cit => cit);
    newArr.splice(2,1);
    return newArr;
}
// console.log(kata8());
    
/*
 Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray'
  e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata9 = () => {
    let newArr = lotrCitiesArray.map(cit => cit);
    newArr.splice(5,newArr.length);
    return newArr;
}
// console.log(kata9());

/*
 Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor'
  e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata10 = () => {
    let output = kata8();
    output.splice(2,0, 'Rohan');
    return output;
}
// console.log(kata10());

/*
 Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e
  retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata11 = () => {
   let output = lotrCitiesArray;
   output.splice(5,1,'Deadest Marshes');
   return output.join(' ,');
}
// console.log(kata11());

/*
 Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'.
  Lembre-se de também adicionar os resultados à página.
*/
const kata12 = () => {
  let arr = bestThing.split('');
  let newArr = arr.slice(0,14);
  return newArr.join(',');
}
// console.log(kata12());
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
// console.log(kata13());

/*
 Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38
  de 'bestThing'. Lembre-se de também adicionar os resultados à página.
*/
const kata14 = () => {
  let arr = bestThing.split('');
  let newArr = arr.slice(23,38);
  return newArr.join(',');
}
// console.log(kata14());

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
// console.log(kata15());

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
// console.log(kata16());

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
// console.log(kata17());

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
// console.log(kata18());

/*
 Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array.
  Lembre-se de também adicionar os resultados à página.
*/
const kata19 = () => {
  let arr = JSON.parse(JSON.stringify(lotrCitiesArray));
  arr.shift();
  return arr;
}
// console.log(kata19());

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
// console.log(kata20());

/*
 KATAS_BÔNUS
*/

/*
 Escreva uma função que transforme a variável 'bestThing' em um array, encontre e **retorne** o índice da palavra
  'only' dentro dela. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus1 = () => {
  let arr = bestThing.slice().split(' ');
  let index = '';
  arr.forEach((element,i)=> {
    if(element === 'only'){
      index = i;
    }
  });
  return index;
}
// console.log(kata_Bonus1());

/*
 Escreva uma função que encontre e **retorne** o índice da última palavra do array 'bestThing'. Lembre-se de
  também**adicionar os resultados à página**.
*/
const kata_Bonus2 = () => {
  let arr = bestThing.slice().split(' ');
  let endLetter = arr.length;
  let index = '';
  arr.forEach((element,i)=> {
    if(element[i] === arr[endLetter]){
      index = i;
    }
  });
  return index;
}
// console.log(kata_Bonus2());

/*
 Escreva uma função que encontre e **retorne** um array de todas as cidades do array 'gotCitiesCSV' que tiverem
  vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus3 = () => {
  let arr = gotCitiesCSV.split(',');
  let arrlist = [];
  arr.forEach(word => {
    if ((word.includes('aa')) || 
        (word.includes('ee')) ||
        (word.includes('ii')) || 
        (word.includes('oo')) || 
        (word.includes('uu')) ){
          arrlist.push(word);
    }
      return arrlist;
  });
  return arrlist;
}
// console.log(kata_Bonus3());

/*
 Escreva uma função que encontre e **retorne** um array com todas as cidades do array 'lotrCitiesArray' que 
 terminem em 'or'. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus4 = () => {
  let arr = lotrCitiesArray.slice();
  let arrList = arr.filter(word => {
    let r = word[word.length - 1];
    let o = word[word.length - 2];
    let arrEndOr = '';
    if (r ==='r' && o ==='o') {
      arrEndOr = word;
    }
    return arrEndOr;
  });
  return arrList;
}
// console.log(kata_Bonus4());

/*
 Escreva uma função que encontre e **retorne** um array com todas as palavras de 'bestThing' que começa com 'b'.
  Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus5 = () => {
  let arr = bestThing.slice().split(' ');
  let arrList = arr.filter(element => element[0] === 'b')
  return arrList;
}
// console.log(kata_Bonus5());

/*
 Escreva uma função que **retorne** 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se
  de também**adicionar os resultados à página**.
*/
const kata_Bonus6 = () => {
  let arr = lotrCitiesArray.slice();
  let output = false;
  arr.forEach(element => {
    element.includes('Mirkwood') ?(
      output = true
    ) : (
      output = output
    );
  });
  return output;
}
// console.log(kata_Bonus6());

/*
 Escreva uma função que **retorne** 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de
  também **adicionar os resultados à página**.
*/
const kata_Bonus7 = () => {
  let arr = lotrCitiesArray.slice();
  let output = false;
  arr.forEach(element => {
    if(element.includes('Hollywood')){
      output = true;
    }
  });
  return output;
}
// console.log(kata_Bonus7());

/*
 Escreva uma função que **retorne** o índice da palavra 'Mirkwood' no array 'lotrCitiesArray'. Lembre-se de também
  **adicionar os resultados à página**.
*/
const kata_Bonus8 = () => {
  let arr = lotrCitiesArray.slice();
  let index = '';
  arr.forEach((element,i)=> {
    if(element === 'Mirkwood'){
      index = i;
    }
  });
  return index;
}
// console.log(kata_Bonus8());

/*
 Escreva uma função que encontre e **retorne** a primeira cidade do array 'lotrCitiesArray' que tiver mais de uma palavra.
  Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus9 = () => {
  let output = lotrCitiesArray.filter(cit => cit.includes(' '));
  return output;
}
// console.log(kata_Bonus9());

/*
 Escreva uma função que inverta a ordem do array 'lotrCitiesArray' e **retorne** o novo array. Lembre-se de também 
 **adicionar os resultados à página**.
*/
const kata_Bonus10 = () => {
  let arr = lotrCitiesArray.slice().reverse();
  return arr;
}
// console.log(kata_Bonus10());

/*
 Escreva uma função que ordene o array 'lotrCitiesArray' alfabeticamente e **retorne** o novo array. Lembre-se de também
  **adicionar os resultados à página**.
*/
const kata_Bonus11 = () => {
  let arr = lotrCitiesArray.slice().sort();
  return arr;
}
// console.log(kata_Bonus11());

/*
 Escreva uma função que ordene o array 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo,
   a cidade mais curta aparece primeiro) e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
*/
const kata_Bonus12 = () => {
  let arr = lotrCitiesArray.slice();
  let output = arr.sort((a, b) => {
      if (a.length > b.length){
          return 1;
      }
      if (a.length < b.length){
          return -1;
      }
      return 0;
  });
  return output;
}
// console.log(kata_Bonus12());

/*
 Show_Results
*/

 //katas_array
const katas_array = [kata1(), kata2(),kata3(),kata4(),kata5(),kata6(),kata7(),kata8(),kata9(),kata10(),kata11(),kata12(),kata13(),
kata14(),kata15(),kata16(),kata17(),kata18(),kata19(),kata20()];

 //bonus_array
const bonus_array = [kata_Bonus1(),kata_Bonus2(),kata_Bonus3(),kata_Bonus4(),kata_Bonus5(),kata_Bonus6(),kata_Bonus7(),kata_Bonus8(),
kata_Bonus9(),kata_Bonus10(),kata_Bonus11(),kata_Bonus12()]

 //index_references
const $box = document.querySelector('#box_Wrapper');
const $btn = document.querySelector('#btn');
const katas_List = document.createElement('ul');

 //show_create_function
const show_result = (result) =>{
  const list = document.createElement('li');
  const list_item = document.createElement('h3');
  list_item.innerText = JSON.stringify(result);
  list.appendChild(list_item);
  katas_List.appendChild(list);
  $box.appendChild(katas_List);
  return result;
}

 //btn_listener
const $btn_listener = () =>{
  $btn.addEventListener('click', ()=>{
    katas_array.forEach((out,num)=> {
      show_result(`KATA${num+1}= ${out}`)
    });
    bonus_array.forEach((el,i)=> {
      show_result(`KATA BONUS${i+1}= ${el}`)
    });
  });
  return $btn;
}
$btn_listener();

//clear btn-function
const $clear_btn = document.querySelector('#clear')
const $clear =()=>{
 $clear_btn.addEventListener('click', ()=>{
    $box.innerText = '';
 });
 return $clear;
}
$clear();


