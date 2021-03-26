




// function keyEventTest() {
//   var input = $('text');
//
//   // event.key ci permette di controllare
//   // anche l'inserimento di un tasto
//   // speciale tipo esc o invio, oppure il
//   // tasto super...
//   input.keydown(function(event) {
//
//     // console.log(event);
//     console.log('down', input.val());
//
//
//     // se si inserisce il carattere numero
//     // 13, si verifica la condizione
//     // dell'if. In questo modo possiamo
//     // modificare in live le pagine web.
//     if (event.keyCode == 13) {
//
//       var str = input.val();
//       $('#title').text(str);
//
//     }
//
//   });
//
//   input.keyup(function(event) {
//
//     var str = input.val();
//     var lng = str.length;
//
//     // console.log(event);
//     console.log('up', str, lng);
//
//     if (lng > 3) {
//
//       str = str.slice(0, -1);
//       input.val(str);
//
//     }
//   });
//
//   input.keypress(function(event) {
//
//
//     // console.log(event);
//     console.log('press', input.val());
//   });
//
// }

















// function zuc1() {

  // Crea un array di 10 oggetti che rappresentano una
  // zucchina, indicando per ognuna varietà, peso e lunghezza.
  // Calcola quanto pesano tutte le zucchine.

//   var zucchine = [
//     {
//       'varieta': 'verde',
//       'peso': 32,
//       'lunghezza': 3
//     },
//     {
//       'varieta': 'rossa',
//       'peso': 24,
//       'lunghezza': 4
//     },
//     {
//       'varieta': 'gialla',
//       'peso': 33,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'marrone',
//       'peso': 22,
//       'lunghezza': 5
//     },
//     {
//       'varieta': 'quadrata',
//       'peso': 18,
//       'lunghezza': 4
//     },
//     {
//       'varieta': 'arcobaleno',
//       'peso': 3,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'Giorgia',
//       'peso': 44,
//       'lunghezza': 120
//     },
//     {
//       'varieta': 'rosa',
//       'peso': 19,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'blu',
//       'peso': 12,
//       'lunghezza': 34
//     },
//     {
//       'varieta': 'HD',
//       'peso': 65,
//       'lunghezza': 1
//     },
//   ];
//
  // var pesoTot = 0;
  //
  // for (var i = 0; i < zucchine.length; i++) {
  //   pesoTot += zucchine[i]['peso'];
  // }
//
//   console.log(pesoTot);
//
// }

// function zuc2() {

  // Crea 10 oggetti che rappresentano una zucchina.
  // Dividi in due array separati le zucchine che misurano
  // meno o più di 15cm.
  // Infine stampa separatamente quanto pesano i due gruppi
  // di zucchine

//   var zucchine = [
//     {
//       'varieta': 'verde',
//       'peso': 32,
//       'lunghezza': 3
//     },
//     {
//       'varieta': 'rossa',
//       'peso': 24,
//       'lunghezza': 4
//     },
//     {
//       'varieta': 'gialla',
//       'peso': 33,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'marrone',
//       'peso': 22,
//       'lunghezza': 5
//     },
//     {
//       'varieta': 'quadrata',
//       'peso': 18,
//       'lunghezza': 4
//     },
//     {
//       'varieta': 'arcobaleno',
//       'peso': 3,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'Giorgia',
//       'peso': 44,
//       'lunghezza': 120
//     },
//     {
//       'varieta': 'rosa',
//       'peso': 19,
//       'lunghezza': 2
//     },
//     {
//       'varieta': 'blu',
//       'peso': 12,
//       'lunghezza': 34
//     },
//     {
//       'varieta': 'HD',
//       'peso': 65,
//       'lunghezza': 1
//     },
//   ];
//
//   var litZuc = [];
//   var bigZuc = [];
//   var long = 0;
//
//   for (var i = 0; i < zucchine.length; i++) {
//
//     logn = zucchine[i]['lunghezza'];
//     if (logn > 15) {
//       bigZuc.push(zucchine[i]);
//     } else {
//       litZuc.push(zucchine[i]);
//     }
//   }
//
//   var pesoTot = 0;
//
//   for (var i = 0; i < zucchine.length; i++) {
//     pesoTot += zucchine[i]['peso'];
//   }
//
//   var pesoBig = 0;
//
//   for (var i = 0; i < bigZuc.length; i++) {
//     pesoBig += bigZuc[i]['peso'];
//   }
//
//   var pesoLit = 0;
//
//   for (var i = 0; i < litZuc.length; i++) {
//     pesoLit += litZuc[i]['peso'];
//   }
//
//   console.log('Totale peso: ' + pesoTot);
//   console.log('peso lunghi: ' + pesoBig);
//   console.log('peso corti: ' + pesoLit);
//
// }



// function revString() {

  // Scrivi una funzione che accetti una stringa come
  // argomento e la ritorni girata (es. Ciao -> oaiC)

//   var stringa = prompt('inserisci una stringa testuale');
//   var counter = stringa.length;
//   var revSt = '';
//
//   for (var i = stringa.length - 1; i >= 0 ; i--) {
//     revSt += stringa[i];
//   }
//
//   console.log(revSt);
//   // console.log(counter);
// }


// function dArray(arr1, arr2) {
//
//   var arrTot = [];
//
//   for (var i = 0; i < arr1.length; i++) {
//     arrTot.push(arr1[i]);
//     arrTot.push(arr2[i]);
//   }
//
//   console.log(arrTot);
//
// }


// function init() {

  // zuc1();
  // zuc2();

  // revString();

  // var numeri = [1, 2, 3, 4];
  // var lettere = ['a','b','c','d'];
  //
  // dArray(numeri, lettere);

  // var testStr = "hello";
  // testStr = testStr.slice(0, -1);
  // console.log(testStr);

  // keyEventTest();

// }

// $(document).ready(init);







// function es6Vars() {

  // const Costante = 10;
  // Costante = 20;

  // const Costante = [1, 2, 3];
  //
  // Costante.push(4);

  // se provo a cambiare l'intera variabile, la costante mi ritorna un errore
  // Costante = [1];

  // console.log(Costante);





  // const Obj = {
    // 'name': ; 'Pluto'
  // };

  // Obj['name'] = 'Marco'
  // Obj['lastname'] = 'Rossi';


// NO
  // const Obj = {
  //   'name' = 'Marco',
  //   'lastname' = 'Rossi'
  // };

  // console.log(Obj['name']);






  // var x = 10;
  //
  // console.log(x, y);
  // let y = 20;
  // var y = 20;






// }


// function arrInfo(arr) {
//     let sum = 0;
//     for (let x=0;x<arr.length;x++) {
//         const elem = arr[x];
//         sum += elem;
//     }
//     let avg = sum / arr.length;
//     return [sum, avg];
// }
// function es6Vars() {
//     // let arr = [ 1, 2, 3 ];
//     // let res = arrInfo(arr);
//     // let sum = res[0];
//     // let avg = res[1];
//     let arr = [ 1, 2, 3 ];
//     // let [, x, y] = arr;
//     let x = arr[1];
//     let y = arr[2];
//     let obj = {
//         'name': 'Marco',
//         'lastname': 'Rossi'
//     };
//     // let { name, lastname } = obj;
//     let name = obj['name'];
//     let lastname = obj['lastname'];
//     console.log(obj, name, lastname);
// }

// function racingBike() {
//
//   const bikes = [
//   {
//     'nome': 'ferrari',
//     'peso': 7
//   },
//   {
//     'nome': 'ducati',
//     'peso': 6
//   },
//   {
//     'nome': 'ktm',
//     'peso': 8
//   },
//   {
//     'nome': 'maserati',
//     'peso': 8
//   }
// ];
//
//   return bikes;
//
// }
//
// function liteBike(arr) {
//
//   let weight = arr['peso'];
//   var minore = arr[0];
//   let temp = 0;
//
//   for (let i = 0; i < arr.lehgth; i++) {
//     temp = arr[i]['peso'];
//     if (temp < minore['peso']) {
//       minore = temp;
//     }
//   }
//
//   console.log(`il peso more è:` + minore);
//
// }

// function es1() {
//   const bikes = [
//     {
//       'nome': 'ducati',
//       'peso': 5
//     },
//     {
//       'nome': 'ktm',
//       'peso': 5
//     },
//     {
//       'nome': 'ferrari',
//       'peso': 5
//     }
//   ];
//
//   let smallBike = {
//     nome: '',
//     peso: Number.MAX_SAFE_INTEGER
//   };
//   for (let i = 0; i < bikes.length; i++) {
//     const bike = bikes[i]; // i=0; bike = {
//                            //   'nome': '',
//                            //   'peso': 5
//                            // },
//     let {nome, peso} = bike;
//
//     if (peso < smallBike) {
//
//         samllBike = bike;
//
//     }
//   }
//   console.log(smallBike);
// }

function randomPoint() {
  var rnd = Math.floor(Math.random() * 100) + 1;

  return rnd;
}

function es2(){
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà:
  // nome, punti fatti, falli subiti.
  // Nome sarà l'unica proprietà da compilare,
  // le altre saranno tutte settate a 0.

  let teams = [
    {
      'name': '',
      'score': 0,
      'penality': 0
    },
    {
      'name': '',
      'score': 0,
      'penality': 0
    },
    {
      'name': '',
      'score': 0,
      'penality': 0
    },
    {
      'name': '',
      'score': 0,
      'penality': 0
    }
  ];
  console.log(teams);

  let sc = 0;
  let penal = 0;

  for (let i = 0; i < teams.length; i++) {
    sc = randomPoint();
    penal = randomPoint();
    const team = teams[i];
    team['score'] = sc;
    team['penality'] = penal;
  }



  

  // Usando la destrutturazione creiamo un nuovo array
  // i cui elementi contengono solo nomi e falli subiti
  // e stampiamo tutto in console.

  const resArr = [];
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    let { score, penality } = team;

    let resObj = { score, penality };
    ressArr.push(resObj);
  }




}


function init() {
  // es1();
  es2();
  // var arrBikes = racingBike();
  // liteBike(arrBikes);
}



$(document).ready(init);
