




function keyEventTest() {
  var input = $('text');

  input.keydown(function(event.key) {
    // console.log(event);
    console.log('down', input.val());
  });

  input.keyup(function(event.key) {

    var str = input.val();
    var lng = str.length;

    // console.log(event);
    console.log('up', str, lng);

    if (lng > 3) {

      str = str.slice(0, -1);
      input.val(str);

    }
  });

  input.keypress(function(event.key) {


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
