




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

function zuc() {

  // Crea un array di 10 oggetti che rappresentano una
  // zucchina, indicando per ognuna varietà, peso e lunghezza.
  // Calcola quanto pesano tutte le zucchine.

  var zucchine = [
    {
      'varieta': 'verde',
      'peso': 32,
      'lunghezza': 3
    },
    {
      'varieta': 'rossa',
      'peso': 24,
      'lunghezza': 4
    },
    {
      'varieta': 'gialla',
      'peso': 33,
      'lunghezza': 2
    },
    {
      'varieta': 'marrone',
      'peso': 22,
      'lunghezza': 5
    },
    {
      'varieta': 'quadrata',
      'peso': 18,
      'lunghezza': 4
    },
    {
      'varieta': 'arcobaleno',
      'peso': 3,
      'lunghezza': 2
    },
    {
      'varieta': 'Giorgia',
      'peso': 44,
      'lunghezza': 120
    },
    {
      'varieta': 'rosa',
      'peso': 19,
      'lunghezza': 2
    },
    {
      'varieta': 'blu',
      'peso': 12,
      'lunghezza': 34
    },
    {
      'varieta': 'HD',
      'peso': 65,
      'lunghezza': 1
    },
  ]

  var pesoTot = 0;

  for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i]['peso'];
  }

  console.log(pesoTot);

}




function init() {

  zuc();

  // var testStr = "hello";
  // testStr = testStr.slice(0, -1);
  // console.log(testStr);

  // keyEventTest();

}

$(document).ready(init);
