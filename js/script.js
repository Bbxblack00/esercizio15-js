




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


function dArray(arr1, arr2) {

  var arrTot = [];

  for (var i = 0; i < arr1.length; i++) {
    arrTot.push(arr1[i]);
    arrTot.push(arr2[i]);
  }

  console.log(arrTot);

}


function init() {

  // zuc1();
  // zuc2();

  // revString();

  var numeri = [1, 2, 3, 4];
  var lettere = ['a','b','c','d'];

  dArray(numeri, lettere);

  // var testStr = "hello";
  // testStr = testStr.slice(0, -1);
  // console.log(testStr);

  // keyEventTest();

}

$(document).ready(init);
