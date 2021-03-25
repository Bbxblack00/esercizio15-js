




function keyEventTest() {
  var input = $('text');

  input.keydown(function() {
    console.log('down', input.val());
  });

  input.keyup(function() {
    console.log('up', input.val());
  });
}






function init() {

  keyEventTest();

}

$(document).ready(init);
