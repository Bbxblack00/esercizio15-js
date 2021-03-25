




function keyEventTest() {
  var input = $('text');

  // event.key ci permette di controllare
  // anche l'inserimento di un tasto
  // speciale tipo esc o invio, oppure il
  // tasto super...
  input.keydown(function(event) {

    // console.log(event);
    console.log('down', input.val());


    // se si inserisce il carattere numero
    // 13, si verifica la condizione
    // dell'if. In questo modo possiamo
    // modificare in live le pagine web 
    if (event.keyCode == 13) {

      var str = input.val();
      $('#title').text(str);

    }

  });

  input.keyup(function(event) {

    var str = input.val();
    var lng = str.length;

    // console.log(event);
    console.log('up', str, lng);

    if (lng > 3) {

      str = str.slice(0, -1);
      input.val(str);

    }
  });

  input.keypress(function(event) {


    // console.log(event);
    console.log('press', input.val());
  });

}






function init() {

  // var testStr = "hello";
  // testStr = testStr.slice(0, -1);
  // console.log(testStr);

  keyEventTest();

}

$(document).ready(init);
